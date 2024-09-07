import { useCallback, useEffect, useState } from 'react';

import { onWindowMessage } from 'commands';
import { EXTENSION_BUTTON_CLICKED } from 'consts';
import { ModalBase } from 'components';

import { useSubscriptions, useWallet } from '../providers';

import { SubscriptionForm } from './subscription-form';
import { SubscriptionsList } from './subscriptions-list';

export const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { wallet, openConnectionModal } = useWallet();
  const { subscriptions, removeSubscription, addSubscription } =
    useSubscriptions();

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

  if (!wallet) {
    return null;
  }

  return (
    <ModalBase
      className="fixed left-4 top-4 w-80 rounded-lg border-l-4 border-blue-500 bg-blue-100 p-4 text-black shadow-lg"
      isOpened={isVisible}
    >
      <SubscriptionForm onSubmit={addSubscription} />
      <SubscriptionsList
        className="mt-4"
        subscriptions={subscriptions}
        onRemove={removeSubscription}
      />
    </ModalBase>
  );
};
