import { classes } from 'utils';

type Props = {
  disabled?: boolean;
  name: string;
  logoSrc?: string;
  onClick?: () => void;
};

export const ProviderListItem = ({
  name,
  logoSrc,
  onClick,
  disabled,
}: Props) => {
  return (
    <button
      className={classes(
        'flex items-center space-x-4 rounded bg-transparent px-4 py-2.5 shadow-md hover:bg-[#53535a] disabled:opacity-50',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {logoSrc && <img src={logoSrc} className="size-8" />}
      <span>{name}</span>
    </button>
  );
};
