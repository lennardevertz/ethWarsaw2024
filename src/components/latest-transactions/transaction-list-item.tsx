import moment from "moment"

import type { SwapWithNetworkInfo } from "~background/messages/get-latest-transactions.types"
import { ConfirmTransactionForm } from "~components"
import {
  getPurchasedToken,
  SUPPORTED_ICONS,
  TOKEN_SYMBOL_TO_ICON,
  type SupportedIcon
} from "~utils"

type TransactionListItemProps = {
  transaction: SwapWithNetworkInfo
  isTransactionFormOpened: boolean
  className?: string
  onFormToggleClick: (transactionId: string | undefined) => void
}

export const TransactionListItem = ({
  transaction,
  isTransactionFormOpened,
  className,
  onFormToggleClick
}: TransactionListItemProps) => {
  const purchasedToken = getPurchasedToken(transaction)

  const timestamp = moment(Number(transaction.timestamp) * 1000)
  const timeFromNow = timestamp.diff(moment(), "minutes")
  const timeFromNowText = moment.duration(timeFromNow, "minutes").humanize(true)
  const showPulseIcon = Math.abs(timeFromNow) <= 24 * 60

  const tokenSymbol =
    purchasedToken.purchaseToken.symbol.toUpperCase() as SupportedIcon
  const tokenIcon = SUPPORTED_ICONS.includes(tokenSymbol)
    ? TOKEN_SYMBOL_TO_ICON[tokenSymbol]
    : TOKEN_SYMBOL_TO_ICON.ETH

  return (
    <li className={`transition-opacity flex flex-col w-full ${className}`}>
      <div className="flex justify-between gap-x-4 py-3 w-full">
        <div className="flex min-w-0 gap-x-3 w-full">
          <img
            className="h-10 w-10 flex-none rounded-full bg-gray-50"
            src={tokenIcon}
            alt=""
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900 text-nowrap">
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
            title={`${purchasedToken.purchaseAmount} ${purchasedToken.purchaseToken.symbol}`}>
            {Number(purchasedToken.purchaseAmount).toPrecision(2)}{" "}
            {purchasedToken.purchaseToken.symbol}
          </p>
          <div className="mt-1 flex items-center gap-x-1.5">
            {showPulseIcon && (
              <div className="flex-none rounded-full bg-emerald-500/20 p-1 animate-pulse">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
              </div>
            )}
            <p
              className="text-xs leading-5 text-gray-500"
              title={timestamp.format("YYYY-MM-DD HH:MM:SS")}>
              Purchased {timeFromNowText}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() =>
              isTransactionFormOpened
                ? onFormToggleClick(undefined)
                : onFormToggleClick(transaction.id)
            }
            className={`${!isTransactionFormOpened ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 hover:bg-gray-500"}  text-white font-bold text-xs px-4 py-2 rounded-lg shadow-lg`}>
            {isTransactionFormOpened ? "Close" : "Buy"}
          </button>
        </div>
      </div>
      {isTransactionFormOpened && <ConfirmTransactionForm />}
    </li>
  )
}
