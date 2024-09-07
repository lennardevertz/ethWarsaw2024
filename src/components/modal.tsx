import * as Portal from '@radix-ui/react-portal';
import type { ReactNode } from 'react';

import { IconButton } from './icon-button';
import { usePortal } from 'app';

type Props = {
  title: ReactNode;
  children: ReactNode;
  isOpened: boolean;
  onClose: () => void;
};

export const Modal = ({ children, title, isOpened, onClose }: Props) => {
  const { portal } = usePortal();

  if (!isOpened) {
    return null;
  }

  return (
    <Portal.Root container={portal}>
      <div className="fixed inset-0 bg-zinc-800/50" onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 w-full max-w-xs -translate-x-1/2 -translate-y-1/2 rounded-lg bg-zinc-700 p-4 text-zinc-100 shadow-lg">
        <div>{title}</div>
        <div className="mt-4">{children}</div>

        <IconButton
          onClick={onClose}
          className="absolute right-2 top-2 flex cursor-pointer items-center justify-center bg-transparent hover:enabled:bg-[#53535a]"
          iconName="Cross2Icon"
          iconClassName="text-[#aaa]"
        />
      </div>
    </Portal.Root>
  );
};
