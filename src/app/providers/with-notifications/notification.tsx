import moment, { duration } from 'moment';
import { useState } from 'react';

import { Swap } from 'commands';
import { twitterLogo, warpcastLogo } from 'images';
import { Subscription } from 'types';
import { classes, getPurchasedToken } from 'utils';
import { IconButton } from 'components';

import { useWallet } from '../with-wallet';

type Props = {
  subscription: Subscription;
  swap: Pick<Swap, 'timestamp' | 'amount0' | 'token0' | 'amount1' | 'token1'>;
  isBuying: boolean;
  onToggleBuying: () => void;
  onClose: () => void;
};

export const Notification = ({
  swap,
  subscription,
  isBuying,
  onClose,
  onToggleBuying,
}: Props) => {
  const { balance } = useWallet();
  const [balancePercentage, setBalancePercentage] = useState(10);
  const { purchaseToken, purchaseAmount } = getPurchasedToken(swap);
  const currentETHBalance = balance;
  const totalValue = Number((currentETHBalance * balancePercentage) / 100);

  const timestamp = moment(Number(swap.timestamp) * 1000);
  const timeFromNow = timestamp.diff(moment(), 'minutes');
  const timeFromNowText = duration(timeFromNow, 'minutes').humanize(true);

  return (
    <div
      className={classes(
        'fixed bottom-6 right-8 w-72 rounded-lg border-l-4 border-green-500 bg-green-100 px-4 py-3 shadow-lg',
        !isBuying && 'animate-pulse',
      )}
    >
      <IconButton
        onClick={onClose}
        className="absolute right-2 top-2 flex cursor-pointer items-center justify-center bg-transparent hover:enabled:bg-[#53535a]"
        iconName="Cross2Icon"
        iconClassName="text-[#aaa]"
        iconSize={12}
      />
      <div>
        <div className="flex justify-between gap-x-4">
          <div className="flex min-w-0 items-center gap-x-2">
            <img
              className="size-12 flex-none rounded-full"
              src={subscription.avatarSrc}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                {subscription.ensName}
                <img src={twitterLogo} alt="Twitter" className="size-4" />
                <img
                  src={warpcastLogo}
                  alt="Farcaster"
                  className="size-4 rounded-full"
                />
              </p>
              <p className="mt-1 flex items-center gap-x-0.5 truncate text-xs leading-5 text-gray-500">
                Purchased {Number(purchaseAmount).toPrecision(2)}{' '}
                {purchaseToken.symbol}
              </p>
              <p className="mt-1 text-xs italic text-gray-700">
                {timeFromNowText}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={onToggleBuying}
              className={`${!isBuying ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 hover:bg-gray-500'} rounded-lg px-4 py-2 text-xs font-bold text-white shadow-lg`}
            >
              {isBuying ? 'Close' : 'Buy'}
            </button>
          </div>
        </div>
        {isBuying && (
          <div className="p-4">
            <div className="flex justify-between">
              <label
                htmlFor="percentageTemplate"
                className="block text-sm font-bold font-medium text-gray-700"
              >
                How much?
              </label>
              <p className="text-xs text-gray-600">
                Balance:{' '}
                <span className="font-medium">
                  {Number(currentETHBalance).toPrecision(2)} ETH{' '}
                </span>
              </p>
            </div>
            <input
              id="percentageTemplate"
              type="range"
              min="0"
              max="100"
              value={balancePercentage}
              onChange={(e) => {
                return setBalancePercentage(Number(e.target.value));
              }}
              className="mt-1 w-full outline-none"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <p className="text-sm text-gray-600">{balancePercentage}%</p>
                <p className="text-sm font-medium text-gray-600">
                  {Number(totalValue).toPrecision(2)} ETH
                </p>
              </div>
              <button
                onClick={() => {}}
                className="ml-auto rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white shadow-lg hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
