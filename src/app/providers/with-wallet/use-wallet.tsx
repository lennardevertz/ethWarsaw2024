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

import { useWalletConnectModal } from './use-wallet-connect-modal';

interface WalletContextValue {
  wallet?: Wallet;
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

  const contextValue: WalletContextValue = useMemo(() => {
    return {
      wallet,
      openConnectionModal,
      isConnectionModalOpened: walletConnectModal.visible,
    };
  }, [openConnectionModal, wallet, walletConnectModal.visible]);

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = createContextHook(WalletContext);
