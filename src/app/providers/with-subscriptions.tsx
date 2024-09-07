import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocalStorage } from 'react-use';

import { Subscription } from 'types';
import { createContextHook } from 'utils';

type SubscriptionsContextValue = {
  subscriptions: Subscription[];
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
  const [storedSubscriptions, setStoredSubscriptions] = useLocalStorage<
    Subscription[]
  >('subscriptions', []);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(
    storedSubscriptions ?? [],
  );

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
    },
    [],
  );

  const removeSubscription = useCallback(
    (subscriptionToBeRemoved: Subscription) => {
      setSubscriptions((previousSubscriptions) => {
        return [...previousSubscriptions].filter((subscription) => {
          return subscription.ensName !== subscriptionToBeRemoved.ensName;
        });
      });
    },
    [],
  );

  useEffect(() => {
    setStoredSubscriptions(subscriptions);
  }, [setStoredSubscriptions, subscriptions]);

  const contextValue: SubscriptionsContextValue = useMemo(() => {
    return {
      subscriptions,
      addSubscription,
      removeSubscription,
    };
  }, [addSubscription, removeSubscription, subscriptions]);

  return (
    <SubscriptionsContext.Provider value={contextValue}>
      {children}
    </SubscriptionsContext.Provider>
  );
};
