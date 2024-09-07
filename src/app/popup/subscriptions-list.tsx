import { Subscription } from 'types';

import { SubscriptionItem } from './subscription-item';

type Props = {
  subscriptions: Subscription[];
  className?: string;
  onRemove: (subscription: Subscription) => void;
};

export const SubscriptionsList = ({
  subscriptions,
  onRemove,
  className,
}: Props) => {
  if (!subscriptions.length) {
    return null;
  }

  return (
    <div className={className}>
      <p className="text-sm font-semibold leading-6 text-gray-900">
        Your Subscriptions
      </p>
      <ul className="mt-2 space-y-2">
        {subscriptions.map((subscription) => {
          return (
            <SubscriptionItem
              subscription={subscription}
              key={subscription.ensName}
              onRemove={onRemove}
            />
          );
        })}
      </ul>
    </div>
  );
};
