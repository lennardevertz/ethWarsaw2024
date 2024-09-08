import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { getAddress } from 'viem';

import {
  GetLatestTransactionsCommand,
  Swap,
  useCommandMutation,
  useCommandQuery,
} from 'commands';

import { useSubscriptions } from '../with-subscriptions';

import { Notification } from './notification';

type Props = {
  children: ReactNode;
};

export const WithNotifications = ({ children }: Props) => {
  const { subscriptions } = useSubscriptions();

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

  const [newTransaction, setNewTransaction] = useState<Swap>();

  useEffect(() => {
    if (newTransaction) {
      return;
    }
    const interval = setInterval(() => {
      checkIfThereIsNewTransaction().then((maybeNewTransaction) => {
        console.log({ maybeNewTransaction });
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

  return (
    <>
      {children}
      {newTransaction && subscriptionOfNewTransaction && (
        <Notification
          swap={newTransaction}
          onClose={() => {
            setNewTransaction(undefined);
            setIsBuying(false);
          }}
          subscription={subscriptionOfNewTransaction}
          isBuying={isBuying}
          onToggleBuying={onToggleBuying}
        />
      )}
    </>
  );
};
