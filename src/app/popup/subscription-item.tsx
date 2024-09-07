import { useCallback } from 'react';

import { anonymousUserAvatar, twitterLogo, warpcastLogo } from 'images';
import { Subscription } from 'types';
import { IconButton } from 'components';

type Props = {
  subscription: Subscription;
  onRemove: (subscription: Subscription) => void;
};

export const SubscriptionItem = ({ subscription, onRemove }: Props) => {
  const remove = useCallback(() => {
    onRemove(subscription);
  }, [onRemove, subscription]);

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="size-8 rounded-full"
          src={subscription.avatarSrc ?? anonymousUserAvatar}
          alt=""
        />
        <p className="ml-2 flex items-center gap-1 text-sm text-gray-700">
          {subscription.ensName}
          {subscription.twitterUsername && (
            <a
              href={`https://x.com/${subscription.twitterUsername}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={twitterLogo} alt="Twitter" className="size-4" />
            </a>
          )}
          {subscription.farcasterUsername && (
            <a
              href={`https://warpcast.com/${subscription.farcasterUsername}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={warpcastLogo}
                alt="Warcaster"
                className="size-4 rounded-full"
              />
            </a>
          )}
        </p>
      </div>
      <IconButton
        iconName="Cross1Icon"
        className="text-red-700"
        onClick={remove}
      />
    </li>
  );
};
