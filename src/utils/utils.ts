import { SwapWithNetworkInfo } from 'commands';

export const getPurchasedToken = (transaction: SwapWithNetworkInfo) => {
  const purchaseAmount =
    Number(transaction.amount0) < 0 ? transaction.amount0 : transaction.amount1;
  const purchaseToken =
    Number(transaction.amount0) < 0 ? transaction.token0 : transaction.token1;

  return {
    purchaseAmount: Math.abs(Number(purchaseAmount)),
    purchaseToken,
  };
};
