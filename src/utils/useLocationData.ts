import { useLocation } from 'react-use';

import { TWITTER_TO_ETH, WARPCAST_TO_ETH } from 'consts';

export const useLocationData = () => {
  const { pathname, host } = useLocation();

  const isTwitter = host === 'x.com';
  const isWarpcast = host === 'warpcast.com';

  if (isTwitter && pathname !== '/home') {
    const userHandle = pathname?.slice(1);
    const walletAddress =
      TWITTER_TO_ETH[userHandle as keyof typeof TWITTER_TO_ETH];
    return { walletAddressFromUserHandle: walletAddress ?? null };
  }

  if (isWarpcast && pathname !== '/') {
    const userHandle = pathname?.slice(1);
    const walletAddress =
      WARPCAST_TO_ETH[userHandle as keyof typeof WARPCAST_TO_ETH];

    return { walletAddressFromUserHandle: walletAddress ?? null };
  }

  return { walletAddressFromUserHandle: null };
};
