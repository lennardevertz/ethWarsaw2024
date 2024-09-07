import { useMutation } from '@tanstack/react-query';
import { create as createModal, useModal } from '@ebay/nice-modal-react';
import { useCallback, useSyncExternalStore } from 'react';
import { getAddress, hexToNumber, type EIP1193Provider, type Hex } from 'viem';
import { createStore } from 'mipd';

import { wait } from 'utils';
import { Wallet } from 'types';
import { Modal } from 'components';

import { ProviderListItem } from './provider-list-item';

type Props = {
  isOpened: boolean;
  onClose: () => void;
  onSuccess: (wallet: Wallet) => void;
};

const walletProvidersStore = createStore();

const WalletConnectModalBase = ({ onClose, isOpened, onSuccess }: Props) => {
  const availableWalletProviders = useSyncExternalStore(
    walletProvidersStore.subscribe,
    walletProvidersStore.getProviders,
  );

  const connectMutation = useMutation({
    mutationFn: async (provider: EIP1193Provider) => {
      const accounts: Hex[] = await provider.request({
        method: 'eth_requestAccounts',
        params: undefined,
      });

      await wait(500);

      const chainId: Hex = await provider.request({
        method: 'eth_chainId',
        params: undefined,
      });

      return { accounts, chainId: hexToNumber(chainId) };
    },
    onSuccess: ({ accounts, chainId }, provider) => {
      // auto select first account
      if (accounts[0]) {
        void onSuccess({
          account: getAddress(accounts[0]),
          provider,
          chainId,
        });
      }
    },
  });

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
        {availableWalletProviders.length === 0 && (
          <p>We couldn&apos;t find any wallet provider.</p>
        )}
        {availableWalletProviders.map((provider) => {
          return (
            <ProviderListItem
              key={provider.info.uuid}
              name={provider.info.name}
              logoSrc={provider.info.icon}
              onClick={() => {
                connectMutation.mutate(provider.provider);
              }}
              disabled={connectMutation.isPending}
            />
          );
        })}
        {window.ethereum ? (
          <ProviderListItem
            name="Browser wallet"
            onClick={() => {
              connectMutation.mutate(window.ethereum as EIP1193Provider);
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

  const resolve = useCallback(
    (wallet: Wallet) => {
      modal.resolve(wallet);
      modal.remove();
    },
    [modal],
  );

  return (
    <WalletConnectModalBase
      isOpened={modal.visible}
      onClose={close}
      onSuccess={resolve}
    />
  );
});
