import { createContext, useMemo, useState, type ReactNode } from 'react';

import { createContextHook } from '~utils';

type PortalContextValue = {
  portal: HTMLDivElement | null;
};

const PortalContext = createContext<PortalContextValue | undefined>(undefined);

export const usePortal = createContextHook(PortalContext);

type Props = {
  children: ReactNode;
};

export const WithPortal = ({ children }: Props) => {
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);

  const contextValue: PortalContextValue = useMemo(() => {
    return {
      portal,
    };
  }, [portal]);

  return (
    <PortalContext.Provider value={contextValue}>
      {children}
      <div ref={setPortal} className="relative z-20" />
    </PortalContext.Provider>
  );
};
