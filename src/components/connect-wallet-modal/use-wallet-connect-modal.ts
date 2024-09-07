import { useModal } from '@ebay/nice-modal-react';
import { useCallback } from 'react';

import { WalletConnectModal } from './connect-wallet-modal';

export const useWalletConnectModal = () => {
  const modal = useModal(WalletConnectModal);

  const show = useCallback(() => {
    modal.show();
  }, [modal]);

  return {
    show,
  };
};
