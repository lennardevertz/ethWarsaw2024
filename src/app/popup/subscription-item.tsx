import { useCallback } from 'react';

import {
  anonymousUserAvatar,
  twitterLogo,
  warpcastLogo,
  DISCORD_ICON,
  EMAIL_ICON,
  GITHUB_ICON,
} from 'images';
import { Subscription } from 'types';
import { IconButton } from 'components';
import {
  GetEnsDiscordCommand,
  GetEnsEmailCommand,
  GetEnsGithubCommand,
  GetEnsTwitterCommand,
  useCommandQuery,
} from 'commands';

type Props = {
  subscription: Subscription;
  onRemove: (subscription: Subscription) => void;
};

export const SubscriptionItem = ({ subscription, onRemove }: Props) => {
  const remove = useCallback(() => {
    onRemove(subscription);
  }, [onRemove, subscription]);

  const emailQuery = useCommandQuery({
    command: new GetEnsEmailCommand({ ensName: subscription.ensName }),
    staleTime: Number.POSITIVE_INFINITY,
  });

  const twitterQuery = useCommandQuery({
    command: new GetEnsTwitterCommand({ ensName: subscription.ensName }),
    staleTime: Number.POSITIVE_INFINITY,
  });

  const githubQuery = useCommandQuery({
    command: new GetEnsGithubCommand({ ensName: subscription.ensName }),
    staleTime: Number.POSITIVE_INFINITY,
  });

  const discordQuery = useCommandQuery({
    command: new GetEnsDiscordCommand({ ensName: subscription.ensName }),
    staleTime: Number.POSITIVE_INFINITY,
  });

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

          {(subscription.twitterUsername ??
            twitterQuery.data) && (
              <a
                href={`https://x.com/${subscription.twitterUsername ?? twitterQuery.data}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={twitterLogo} alt="Twitter" className="size-4" />
              </a>
            )}
          {githubQuery.data && (
            <a
              href={`https://github.com/${githubQuery.data}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={GITHUB_ICON} alt="GitHub" className="size-4" />
            </a>
          )}
          {discordQuery.data && (
            <span title={discordQuery.data}>
              <img src={DISCORD_ICON} alt="GitHub" className="size-4" />
            </span>
          )}
          {emailQuery.data && (
            <a
              href={`mailto:${emailQuery.data}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={EMAIL_ICON} alt="GitHub" className="size-4" />
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
