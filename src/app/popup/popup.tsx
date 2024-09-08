import { useCallback, useEffect, useMemo, useState } from 'react';
import { createWalletClient, custom, publicActions } from 'viem';

import { onWindowMessage } from 'commands';
import {
  aleph,
  EXTENSION_BUTTON_CLICKED,
  SETTINGS_ABI,
  SETTINGS_ADDRESS,
} from 'consts';
import { IconButton, ModalBase } from 'components';
import { Subscription } from 'types';

import { useSubscriptions, useWallet } from '../providers';

import { SubscriptionForm } from './subscription-form';
import { SubscriptionsList } from './subscriptions-list';
import { PopupSettings } from './popup-settings';

export const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { wallet, openConnectionModal } = useWallet();
  const { subscriptions, refetch } = useSubscriptions();

  const toggleVisibility = useCallback(() => {
    if (!isVisible && !wallet) {
      openConnectionModal();
    }

    setIsVisible((prev) => {
      return !prev;
    });
  }, [isVisible, openConnectionModal, wallet]);

  useEffect(() => {
    return onWindowMessage<void>(EXTENSION_BUTTON_CLICKED, toggleVisibility);
  }, [toggleVisibility]);

  const walletClient = useMemo(() => {
    if (!wallet) {
      return;
    }

    return createWalletClient({
      transport: custom(wallet.provider),
    }).extend(publicActions);
  }, [wallet]);

  const handleAddNewSubscription = useCallback(
    async (subscription: Subscription) => {
      if (!walletClient || !wallet) {
        return;
      }

      await walletClient.switchChain({ id: aleph.id });

      const transactionHash = await walletClient.writeContract({
        abi: SETTINGS_ABI,
        args: [subscription.walletAddress],
        chain: aleph,
        address: SETTINGS_ADDRESS,
        account: wallet.account,
        functionName: 'addAddress',
      });

      await walletClient.waitForTransactionReceipt({ hash: transactionHash });
      refetch();
    },
    [refetch, wallet, walletClient],
  );

  const handleRemoveSubscription = useCallback(
    async (subscription: Subscription) => {
      if (!walletClient || !wallet) {
        return;
      }

      await walletClient.switchChain({ id: aleph.id });

      const transactionHash = await walletClient.writeContract({
        abi: SETTINGS_ABI,
        args: [subscription.walletAddress],
        chain: aleph,
        address: SETTINGS_ADDRESS,
        account: wallet.account,
        functionName: 'removeAddress',
      });

      await walletClient.waitForTransactionReceipt({ hash: transactionHash });
      refetch();
    },
    [refetch, wallet, walletClient],
  );

  if (!wallet) {
    return null;
  }

  return (
    <ModalBase
      className="fixed left-4 top-4 w-80 rounded-lg border-l-4 border-blue-500 bg-blue-100 p-4 text-black shadow-lg"
      isOpened={isVisible}
    >
      <IconButton
        iconName="Cross1Icon"
        className="absolute right-2 top-2 text-gray-700"
        iconSize={12}
        onClick={() => {
          setIsVisible(false);
        }}
      />

      <SubscriptionForm onSubmit={handleAddNewSubscription} />
      <SubscriptionsList
        className="mt-4"
        subscriptions={subscriptions}
        onRemove={handleRemoveSubscription}
      />
      <PopupSettings />
    </ModalBase>
  );
};
