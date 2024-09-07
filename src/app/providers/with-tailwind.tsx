import { ReactNode } from 'react';

import styles from './tailwind.build.css';

interface Properties {
  children: ReactNode;
}

export const WithTailwind = ({ children }: Properties) => {
  return (
    <>
      <style type="text/css">{styles.toString()}</style>
      {children}
    </>
  );
};
