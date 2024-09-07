import { useQuery } from '@tanstack/react-query';
// disable linter due to unresolved import, it is resolved via framework
// eslint-disable-next-line import/no-unresolved
import cssText from 'data-text:~style.css';
import { relayMessage, sendToBackgroundViaRelay } from '@plasmohq/messaging';
import type { PlasmoCSConfig } from 'plasmo';

import { withProviders } from '~providers';
import { useWalletConnectModal } from '~components';

export const getStyle = () => {
  const style = document.createElement('style');
  style.textContent = cssText;
  return style;
};

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  world: 'MAIN',
  run_at: 'document_start',
};

const ContentScript = () => {
  const getStarWarsQuery = useQuery({
    queryKey: ['get-star-wars'],
    queryFn: () => {
      relayMessage({
  name: 'get-star-wars',
});


      return sendToBackgroundViaRelay({
        name: 'get-star-wars',
        extensionId: 'lindfjjklmdbjajliccbhkmmfmplhiai',
      });
    },
  });

  const modal = useWalletConnectModal();

  return (
    <button
      className="absolute left-20 top-20 bg-green-300 text-black"
      onClick={modal.show}
    >
      {getStarWarsQuery.data}
    </button>
  );
};

export default withProviders(ContentScript);
