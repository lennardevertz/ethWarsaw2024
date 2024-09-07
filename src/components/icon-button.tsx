import { classes } from '~utils';

import { Icon, type IconName } from './icon';

type Props = {
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  iconName: IconName;
  iconSize?: number;
  iconClassName?: string;
};

export const IconButton = ({
  onClick,
  className,
  iconName,
  iconClassName,
  iconSize = 16,
  type = 'button',
  disabled = false,
}: Props) => {
  return (
    <button
      className={classes(
        'flex rounded bg-white/10 p-1',
        'hover:enabled:bg-white/20 active:enabled:bg-white/40',
        'disabled:opacity-50',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <Icon className={iconClassName} name={iconName} size={iconSize} />
    </button>
  );
};
