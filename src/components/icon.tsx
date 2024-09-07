import * as Icons from '@radix-ui/react-icons';
import { useMemo } from 'react';

import { classes } from 'utils';

export type IconName = keyof typeof Icons;

type Props = {
  name: IconName;
  className?: string;
  size?: number;
};

export const Icon = ({ name, className, size = 24 }: Props) => {
  const IconComponent = useMemo(() => {
    return Icons[name];
  }, [name]);

  return (
    <IconComponent
      height={size}
      width={size}
      className={classes('inline-block', className)}
    />
  );
};
