import { useQuery } from "@tanstack/react-query"

import { sendToBackground } from "@plasmohq/messaging"

import type { SwapWithNetworkInfo } from "~background/messages/get-latest-transactions.types"

import { TransactionListItem } from "./transaction-list-item"

type LatestTransactionsProps = {
  walletAddress: string
}

export const LatestTransactions = ({
  walletAddress
}: LatestTransactionsProps) => {
  const transactions = useQuery<SwapWithNetworkInfo[]>({
    queryKey: ["get-latest-transactions"],
    queryFn: () => {
      return sendToBackground({
        name: "get-latest-transactions",
        body: {
          address: walletAddress
        }
      })
    }
  })

  if (!transactions.data?.length) {
    return null
  }

  return (
    <div className="bg-gray-200 px-4 py-2 rounded-lg border-l-4 border-gray-400 w-96 max-w-lg absolute top-20 left-20">
      <ul role="list" className="divide-y divide-gray-100">
        {transactions.data?.map((transaction) => {
          return (
            <TransactionListItem
              transaction={transaction}
              key={transaction.id}
            />
          )
        })}
      </ul>
    </div>
  )
}
