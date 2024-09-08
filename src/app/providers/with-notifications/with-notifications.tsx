import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import {
  createWalletClient,
  custom,
  getAddress,
  Hex,
  publicActions,
} from 'viem';
import { base } from 'viem/chains';
import { useMutation } from '@tanstack/react-query';

import {
  GetLatestTransactionsCommand,
  SubmitDegenModeTransactionCommand,
  SwapWithNetworkInfo,
  useCommandMutation,
  useCommandQuery,
} from 'commands';
import { getBrianPrompt, getPurchasedToken } from 'utils';
import { GetBrianResponseCommand } from 'src/commands/get-brian-response';

import { useSubscriptions } from '../with-subscriptions';
import { useWallet } from '../with-wallet';

import { Notification } from './notification';

type Props = {
  children: ReactNode;
};

export const WithNotifications = ({ children }: Props) => {
  const { subscriptions, isDegenModeActive } = useSubscriptions();

  const wallets = useMemo(() => {
    return subscriptions.map((sub) => {
      return sub.walletAddress;
    });
  }, [subscriptions]);

  const latestTransactionsQuery = useCommandQuery({
    queryKey: 'latestTransactionMemoised',
    command: new GetLatestTransactionsCommand({
      addresses: wallets,
      slice: 1,
    }),
    enabled: wallets.length > 0,
    staleTime: Infinity,
  });

  const latestTransactionsMutation = useCommandMutation(
    GetLatestTransactionsCommand,
  );

  const checkIfThereIsNewTransaction = useCallback(async () => {
    const [latestTransaction] = await latestTransactionsMutation.mutateAsync({
      slice: 1,
      addresses: wallets,
    });

    if (
      !latestTransactionsQuery.data ||
      latestTransactionsQuery.data.length === 0
    ) {
      return latestTransaction;
    }

    const latestTransactionTimestamp = Number(
      latestTransaction?.timestamp ?? 0,
    );
    const lastMemoisedTimestap = Number(
      latestTransactionsQuery.data?.[0]?.timestamp ?? 0,
    );

    const timeDiff = latestTransactionTimestamp - lastMemoisedTimestap;

    const theresNewTransaction = timeDiff > 0;
    if (theresNewTransaction) {
      return latestTransaction;
    }

    return undefined;
  }, [latestTransactionsMutation, latestTransactionsQuery, wallets]);

  const [newTransaction, setNewTransaction] = useState<SwapWithNetworkInfo>();

  useEffect(() => {
    if (newTransaction) {
      return;
    }
    const interval = setInterval(() => {
      checkIfThereIsNewTransaction().then((maybeNewTransaction) => {
        if (maybeNewTransaction) {
          clearInterval(interval);
          setNewTransaction(maybeNewTransaction);
        }
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [checkIfThereIsNewTransaction, newTransaction]);

  const subscriptionOfNewTransaction = useMemo(() => {
    if (!newTransaction) {
      return;
    }

    const foundSub = subscriptions.find((sub) => {
      return sub.walletAddress === getAddress(newTransaction.origin);
    });

    return foundSub;
  }, [newTransaction, subscriptions]);

  useEffect(() => {
    const fn = () => {
      setNewTransaction(undefined);
    };
    const t = setTimeout(fn, 10000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  const [isBuying, setIsBuying] = useState(false);

  const onToggleBuying = useCallback(() => {
    setIsBuying((prev) => {
      return !prev;
    });
  }, []);

  const { wallet, openConnectionModal } = useWallet();

  const brianMutation = useCommandMutation(GetBrianResponseCommand);
  const degenMutation = useCommandMutation(SubmitDegenModeTransactionCommand);
  const sendTransactionMutation = useMutation({
    mutationFn: async (props: { to: Hex; value: string; data: Hex }) => {
      if (!wallet) {
        return;
      }

      const walletClient = createWalletClient({
        chain: base,
        transport: custom(wallet?.provider),
      }).extend(publicActions);

      const tx = await walletClient.sendTransaction({
        account: wallet.account,
        to: props.to,
        value: BigInt(props.value),
        data: props.data,
      });

      await walletClient.waitForTransactionReceipt({ hash: tx });
    },
  });

  const isLoading =
    brianMutation.isPending ||
    degenMutation.isPending ||
    sendTransactionMutation.isPending;

  const isSuccess =
    degenMutation.isSuccess || sendTransactionMutation.isSuccess;

  const callBrian = async (amount: number, swap: SwapWithNetworkInfo) => {
    setIsBuying(false);
    const resolvedWallet = wallet ?? (await openConnectionModal());
    const purchasedToken = getPurchasedToken(swap);

    const prompt = getBrianPrompt(
      purchasedToken.purchaseToken.symbol,
      swap._network,
      amount,
    );
    console.log('prompt 👌👌👌', prompt);
    const brianResponse = await brianMutation.mutateAsync({
      address: isDegenModeActive
        ? (process.env.DEGEN_MODE_ADDRESS as string)
        : resolvedWallet.account,
      prompt: prompt,
    });

    console.log('brianResponse', brianResponse);

    if (isDegenModeActive) {
      degenMutation.mutateAsync({
        to: brianResponse.result[0].data.steps[0].to,
        value: brianResponse.result[0].data.steps[0].value,
        data: brianResponse.result[0].data.steps[0].data,
      });
    } else {
      await sendTransactionMutation.mutateAsync({
        to: brianResponse.result[0].data.steps[0].to,
        value: brianResponse.result[0].data.steps[0].value,
        data: brianResponse.result[0].data.steps[0].data,
      });
    }
  };

  return (
    <>
      {children}
      {newTransaction && subscriptionOfNewTransaction && (
        <Notification
          isLoading={isLoading}
          isSuccess={isSuccess}
          swap={newTransaction}
          onClose={() => {
            setNewTransaction(undefined);
            setIsBuying(false);
          }}
          subscription={subscriptionOfNewTransaction}
          isBuying={isBuying}
          onToggleBuying={onToggleBuying}
          onConfirmClicked={(v) => {
            return callBrian(v, newTransaction);
          }}
        />
      )}
    </>
  );
};
