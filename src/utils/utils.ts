import type { SwapWithNetworkInfo } from "~background/messages/get-latest-transactions.types"

export const getPurchasedToken = (transaction: SwapWithNetworkInfo) => {
    const purchaseAmount = Number(transaction.amount0) > 0 ? transaction.amount0 : transaction.amount1
    const purchaseToken = Number(transaction.token0) > 0 ? transaction.token0 : transaction.token1

    return {
        purchaseAmount,
        purchaseToken
    }
}
