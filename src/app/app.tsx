import { withProviders } from './providers';
import { Popup } from './popup/popup';
import { useCommandQuery } from 'src/commands/command';
import { TWITTER_TO_ETH } from 'commands';
import { LatestTransactions } from 'components';

const ApplicationBase = () => {
  return (
    <>
      <Popup />
      <LatestTransactions walletAddress={TWITTER_TO_ETH['levertz_']} />
    </>
  );
};

export const Application = withProviders(ApplicationBase);
