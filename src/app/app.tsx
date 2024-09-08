import { LatestTransactions } from 'components';
import { useLocationData } from 'utils';

import { Popup } from './popup/popup';
import { withProviders } from './providers';

const ApplicationBase = () => {
  const { walletAddressFromUserHandle } = useLocationData();

  return (
    <>
      <Popup />
      {walletAddressFromUserHandle && (
        <LatestTransactions walletAddress={walletAddressFromUserHandle} />
      )}
    </>
  );
};

export const Application = withProviders(ApplicationBase);
