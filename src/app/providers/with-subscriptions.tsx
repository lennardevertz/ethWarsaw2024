import { createContext, ReactNode, useMemo, useState } from 'react';
import { Hex } from 'viem';

import { GetSettingsCommand, useCommandQuery } from 'commands';
import { Subscription } from 'types';
import { createContextHook } from 'utils';
import { ENS_TO_AVATAR, ENS_TO_FARCASTER, ENS_TO_TWITTER } from 'consts';

import { useWallet } from './with-wallet';

type SubscriptionsContextValue = {
  subscriptions: Subscription[];
  isDegenModeActive: boolean;
  toggleDegenMode: () => void;
  refetch: () => void;
};

const SubscriptionsContext = createContext<
  SubscriptionsContextValue | undefined
>(undefined);

export const useSubscriptions = createContextHook(SubscriptionsContext);

type Props = {
  children: ReactNode;
};

export const WithSubscriptions = ({ children }: Props) => {
  const [isDegenModeActive, setIsDegenModeActive] = useState(false);

  const toggleDegenMode = () => {
    setIsDegenModeActive((prev) => {
      return !prev;
    });
  };

  const { wallet } = useWallet();
  const subscriptions = useCommandQuery({
    command: new GetSettingsCommand({
      address: wallet?.account ?? '0x',
    }),
    enabled: Boolean(wallet?.account),
    select: (v) => {
      return Object.entries(v).map(([walletAddress, ensName]) => {
        return {
          ensName,
          walletAddress: walletAddress as Hex,
          avatarSrc: ENS_TO_AVATAR[ensName],
          twitterUsername: ENS_TO_TWITTER[ensName],
          farcasterUsername: ENS_TO_FARCASTER[ensName],
        };
      });
    },
  });

  const contextValue: SubscriptionsContextValue = useMemo(() => {
    return {
      subscriptions: subscriptions.data ?? [],
      isDegenModeActive,
      toggleDegenMode,
      refetch: subscriptions.refetch,
    };
  }, [isDegenModeActive, subscriptions]);

  return (
    <SubscriptionsContext.Provider value={contextValue}>
      {children}
    </SubscriptionsContext.Provider>
  );
};
