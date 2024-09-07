import { useMutation } from '@tanstack/react-query';
import { create as createModal, useModal } from '@ebay/nice-modal-react';
import { useCallback, useMemo } from 'react';
import { getAddress, hexToNumber, type EIP1193Provider, type Hex } from 'viem';

import type { Wallet } from '~types';

import { Modal } from '../modal';

import { ProviderListItem } from './provider-list-item';

type Props = {
  isOpened: boolean;
  onClose: () => void;
  onSuccess: (wallet: Wallet) => void;
};

const WalletConnectModalBase = ({ onClose, isOpened, onSuccess }: Props) => {
  const connectMutation = useMutation({
    mutationFn: async (provider: EIP1193Provider) => {
      const accounts: Hex[] = await provider.request({
        method: 'eth_requestAccounts',
        params: undefined,
      });

      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });

      const chainId: Hex = await provider.request({
        method: 'eth_chainId',
        params: undefined,
      });

      return { accounts, chainId: hexToNumber(chainId) };
    },
    onSuccess: ({ accounts, chainId }, provider) => {
      // auto select account if there is only a single one
      if (accounts.length === 1 && accounts[0]) {
        void onSuccess({
          account: getAddress(accounts[0]),
          provider,
          chainId,
        });
      }
    },
  });

  const availableAccounts = useMemo(() => {
    if (!connectMutation.data) {
      return [];
    }

    return connectMutation.data.accounts.map((account) => {
      return getAddress(account);
    });
  }, [connectMutation.data]);
  console.log({eth: window.ethereum})

  return (
    <Modal
      title={
        <div className="flex items-center space-x-2">
          <p className="text-lg font-semibold">Connect wallet</p>
        </div>
      }
      onClose={onClose}
      isOpened={isOpened}
    >
      <div className="flex flex-col space-y-2">
        {window.ethereum ? (
          <ProviderListItem
            name="Browser wallet"
            onClick={() => {
              connectMutation.mutate(window.ethereum);
            }}
          />
        ) : (
          <p>We couldn&apos;t find any wallet provider.</p>
        )}
      </div>
    </Modal>
  );
};

export const WalletConnectModal = createModal(() => {
  const modal = useModal();

  const close = useCallback(() => {
    modal.reject();
    modal.remove();
  }, [modal]);

  const resolve = useCallback(() => {
    modal.resolve('TEST');
    modal.remove();
  }, [modal]);

  return (
    <WalletConnectModalBase
      isOpened={modal.visible}
      onClose={close}
      onSuccess={resolve}
    />
  );
});
