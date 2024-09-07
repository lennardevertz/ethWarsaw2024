import { withProviders } from './providers';
import { Popup } from './popup/popup';

const ApplicationBase = () => {
  return (
    <>
      <Popup />
    </>
  );
};

export const Application = withProviders(ApplicationBase);
