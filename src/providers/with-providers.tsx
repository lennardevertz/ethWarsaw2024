import type { ComponentType, FC } from 'react';

import { WithNiceModal } from './with-nice-modal';
import { WithPortal } from './with-portal';
import { WithQueryClient } from './with-query-client';

export const withProviders = (Component: ComponentType): FC => {
  function ComponentWithProviders() {
    return (
          <WithQueryClient>
      <WithPortal>
        <WithNiceModal>
            <Component />
        </WithNiceModal>
      </WithPortal>
          </WithQueryClient>
    );
  }

  return ComponentWithProviders;
};
