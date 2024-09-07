import { useCommandQuery } from 'src/commands/command';
import { GetStarWarsCommand } from 'commands';

import { useWallet, withProviders } from './providers';

const ApplicationBase = () => {
  const getStarWarsQuery = useCommandQuery({
    command: new GetStarWarsCommand({}),
  });

  const { openConnectionModal, wallet } = useWallet();

  console.log({ wallet });

  return (
    <div
      className="absolute left-20 top-20 bg-green-400 p-20 text-black"
      onClick={openConnectionModal}
    >
      {getStarWarsQuery.data?.['eye_color'] ?? 'Loading'}
    </div>
  );
};

export const Application = withProviders(ApplicationBase);
