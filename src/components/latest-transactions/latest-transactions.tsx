import { useQuery } from "@tanstack/react-query"

import { sendToBackground } from "@plasmohq/messaging"

import type { SwapWithNetworkInfo } from "~background/messages/get-latest-transactions.types"

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

  console.log(transactions.data)

  return (
    <div className="absolute top-20 left-20 bg-green-300 text-black">
      {transactions.data?.map((transaction) => (
        <div key={transaction.id}>{transaction._network}</div>
      ))}
    </div>
  )
}
