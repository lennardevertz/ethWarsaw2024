import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Hex, hexToNumber } from 'viem';

import { Wallet } from 'types';
import { createContextHook } from 'utils';
import { GetWalletBalanceCommand, useCommandQuery } from 'commands';

import { useWalletConnectModal } from './use-wallet-connect-modal';

interface WalletContextValue {
  wallet?: Wallet;
  disconnect: () => void;
  balance: number;
  openConnectionModal: () => Promise<Wallet>;
  isConnectionModalOpened: boolean;
}

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const WithWallet = ({ children }: Props) => {
  const walletConnectModal = useWalletConnectModal();

  const [wallet, setWallet] = useState<Wallet>();

  const balance = useCommandQuery({
    command: new GetWalletBalanceCommand({
      walletAddress: wallet?.account ?? null,
    }),
    enabled: !!wallet?.account,
  });

  useEffect(() => {
    const onAccountsChanged = () => {
      setWallet(undefined);
    };
    wallet?.provider.on('accountsChanged', onAccountsChanged);

    return () => {
      wallet?.provider.removeListener('accountsChanged', onAccountsChanged);
    };
  }, [wallet?.provider]);

  useEffect(() => {
    const onChainChanged = (chainId: Hex) => {
      setWallet((previous) => {
        if (!previous) {
          return;
        }

        return { ...previous, chainId: hexToNumber(chainId) };
      });
    };
    wallet?.provider.on('chainChanged', onChainChanged);

    return () => {
      wallet?.provider.removeListener('chainChanged', onChainChanged);
    };
  }, [wallet?.provider]);

  const openConnectionModal = useCallback(async () => {
    try {
      const resolvedWallet = await walletConnectModal.show();
      setWallet(resolvedWallet);
      return resolvedWallet;
    } catch (error) {
      setWallet(undefined);
      throw error;
    }
  }, [walletConnectModal]);

  const disconnect = useCallback(() => {
    setWallet(undefined);
  }, []);

  const contextValue: WalletContextValue = useMemo(() => {
    return {
      balance: balance.data ?? 0,
      wallet,
      openConnectionModal,
      disconnect,
      isConnectionModalOpened: walletConnectModal.visible,
    };
  }, [
    balance.data,
    disconnect,
    openConnectionModal,
    wallet,
    walletConnectModal.visible,
  ]);

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = createContextHook(WalletContext);
