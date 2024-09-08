import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Hex } from 'viem';

import {
  GetAddressesEnsesCommand,
  GetSettingsCommand,
  useCommandQuery,
} from 'commands';
import { Subscription } from 'types';
import { createContextHook } from 'utils';
import { ENS_TO_AVATAR, ENS_TO_FARCASTER, ENS_TO_TWITTER } from 'consts';

import { useWallet } from './with-wallet';

type SubscriptionsContextValue = {
  subscriptions: Subscription[];
  isDegenModeActive: boolean;
  toggleDegenMode: () => void;
  addSubscription: (subscription: Subscription) => void;
  removeSubscription: (subscription: Subscription) => void;
};

const SubscriptionsContext = createContext<
  SubscriptionsContextValue | undefined
>(undefined);

export const useSubscriptions = createContextHook(SubscriptionsContext);

export const usePortal = createContextHook(SubscriptionsContext);

type Props = {
  children: ReactNode;
};

export const WithSubscriptions = ({ children }: Props) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isDegenModeActive, setIsDegenModeActive] = useState(false);

  const toggleDegenMode = () => {
    setIsDegenModeActive((prev) => {
      return !prev;
    });
  };

  const { wallet } = useWallet();

  const settingsQuery = useCommandQuery({
    command: new GetSettingsCommand({
      address: wallet?.account ?? '0x',
    }),
    enabled: Boolean(wallet?.account),
  });

  const storedEnsesQuery = useCommandQuery({
    command: new GetAddressesEnsesCommand({
      addresses: settingsQuery.data ?? [],
    }),
    enabled: settingsQuery.data && settingsQuery.data.length > 0,
  });

  useEffect(() => {
    if (storedEnsesQuery.data) {
      const subscriptionsResult = Object.entries(storedEnsesQuery.data).map(
        ([walletAddress, ensName]) => {
          return {
            ensName,
            walletAddress: walletAddress as Hex,
            avatarSrc: ENS_TO_AVATAR[ensName],
            twitterUsername: ENS_TO_TWITTER[ensName],
            farcasterUsername: ENS_TO_FARCASTER[ensName],
          };
        },
      );
      setSubscriptions(subscriptionsResult);
    }
  }, [settingsQuery.data, storedEnsesQuery]);

  const addSubscription = useCallback(
    (newSubscriptionCandidate: Subscription) => {
      setSubscriptions((previousSubscriptions) => {
        if (
          previousSubscriptions.some((subscription) => {
            return subscription.ensName === newSubscriptionCandidate.ensName;
          })
        ) {
          return previousSubscriptions;
        }

        return [...previousSubscriptions, newSubscriptionCandidate];
      });
      settingsQuery.refetch();
    },
    [settingsQuery],
  );

  const removeSubscription = useCallback(
    (subscriptionToBeRemoved: Subscription) => {
      setSubscriptions((previousSubscriptions) => {
        return [...previousSubscriptions].filter((subscription) => {
          return subscription.ensName !== subscriptionToBeRemoved.ensName;
        });
      });
      settingsQuery.refetch();
    },
    [settingsQuery],
  );

  const contextValue: SubscriptionsContextValue = useMemo(() => {
    return {
      subscriptions,
      isDegenModeActive,
      toggleDegenMode,
      addSubscription,
      removeSubscription,
    };
  }, [addSubscription, isDegenModeActive, removeSubscription, subscriptions]);

  return (
    <SubscriptionsContext.Provider value={contextValue}>
      {children}
    </SubscriptionsContext.Provider>
  );
};
