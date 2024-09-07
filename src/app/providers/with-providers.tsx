import type { ComponentType, FC } from 'react';

import { WithNiceModal } from './with-nice-modal';
import { WithPortal } from './with-portal';
import { WithQueryClient } from './with-query-client';
import { WithTailwind } from './with-tailwind';
import { WithWallet } from './with-wallet/use-wallet';
import { WithSubscriptions } from './with-subscriptions';

export const withProviders = (Component: ComponentType): FC => {
  function ComponentWithProviders() {
    return (
      <WithTailwind>
        <WithQueryClient>
          <WithPortal>
            <WithNiceModal>
              <WithWallet>
                <WithSubscriptions>
                  <Component />
                </WithSubscriptions>
              </WithWallet>
            </WithNiceModal>
          </WithPortal>
        </WithQueryClient>
      </WithTailwind>
    );
  }

  return ComponentWithProviders;
};
