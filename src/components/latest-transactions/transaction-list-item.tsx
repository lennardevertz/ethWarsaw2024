import moment, { duration } from 'moment';

import {
  getPurchasedToken,
  SUPPORTED_ICONS,
  TOKEN_SYMBOL_TO_ICON,
  type SupportedIcon,
} from 'utils';
import { SwapWithNetworkInfo } from 'commands';

import { ConfirmTransactionForm } from '../confirm-transaction-form';

type TransactionListItemProps = {
  transaction: SwapWithNetworkInfo;
  isTransactionFormOpened: boolean;
  className?: string;
  onFormToggleClick: (transactionId: string | undefined) => void;
};

export const TransactionListItem = ({
  transaction,
  isTransactionFormOpened,
  className,
  onFormToggleClick,
}: TransactionListItemProps) => {
  const purchasedToken = getPurchasedToken(transaction);

  const timestamp = moment(Number(transaction.timestamp) * 1000);
  const timeFromNow = timestamp.diff(moment(), 'minutes');
  const timeFromNowText = duration(timeFromNow, 'minutes').humanize(true);
  const showPulseIcon = Math.abs(timeFromNow) <= 24 * 60;

  const tokenSymbol =
    purchasedToken.purchaseToken.symbol.toUpperCase() as SupportedIcon;
  const tokenIcon = SUPPORTED_ICONS.includes(tokenSymbol)
    ? TOKEN_SYMBOL_TO_ICON[tokenSymbol]
    : TOKEN_SYMBOL_TO_ICON.ETH;

  return (
    <li className={`flex w-full flex-col transition-opacity ${className}`}>
      <div className="flex w-full justify-between gap-x-4 py-3">
        <div className="flex w-full min-w-0 gap-x-3">
          <img
            className="size-10 flex-none rounded-full bg-gray-50"
            src={tokenIcon}
            alt=""
          />
          <div className="min-w-0 flex-auto">
            <p className="text-nowrap text-sm font-semibold leading-6 text-gray-900">
              {purchasedToken.purchaseToken.name}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {purchasedToken.purchaseToken.symbol}
            </p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p
            className="text-sm leading-6 text-gray-900"
            title={`${purchasedToken.purchaseAmount} ${purchasedToken.purchaseToken.symbol}`}
          >
            {Number(purchasedToken.purchaseAmount).toPrecision(4)}{' '}
            {purchasedToken.purchaseToken.symbol}
          </p>
          <div className="mt-1 flex items-center gap-x-1.5">
            {showPulseIcon && (
              <div className="flex-none animate-pulse rounded-full bg-emerald-500/20 p-1">
                <div className="size-1.5 rounded-full bg-emerald-500" />
              </div>
            )}
            <p
              className="text-xs leading-5 text-gray-500"
              title={timestamp.format('YYYY-MM-DD HH:MM:SS')}
            >
              Purchased {timeFromNowText}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              return isTransactionFormOpened
                ? onFormToggleClick(undefined)
                : onFormToggleClick(transaction.id);
            }}
            className={`${!isTransactionFormOpened ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 hover:bg-gray-500'} rounded-lg px-4 py-2 text-xs font-bold text-white shadow-lg`}
          >
            {isTransactionFormOpened ? 'Close' : 'Buy'}
          </button>
        </div>
      </div>
      {isTransactionFormOpened && <ConfirmTransactionForm />}
    </li>
  );
};
