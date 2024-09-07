import NiceModal from '@ebay/nice-modal-react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const WithNiceModal = ({ children }: Props) => {
  return <NiceModal.Provider>{children}</NiceModal.Provider>;
};
