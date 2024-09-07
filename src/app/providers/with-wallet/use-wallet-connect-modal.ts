import { useModal } from '@ebay/nice-modal-react';
import { useCallback } from 'react';

import { Wallet } from 'types';

import { WalletConnectModal } from './connect-wallet-modal';

export const useWalletConnectModal = () => {
  const modal = useModal(WalletConnectModal);

  const show = useCallback(async () => {
    const wallet = await modal.show();
    return wallet as Wallet;
  }, [modal]);

  return {
    visible: modal.visible,
    show,
  };
};
