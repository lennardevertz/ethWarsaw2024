import { Swap } from 'commands';

export const getPurchasedToken = (transaction: Pick<Swap, 'amount0' | 'token0' | 'amount1' | 'token1'>) => {
  const purchaseAmount =
    Number(transaction.amount0) < 0 ? transaction.amount0 : transaction.amount1;
  const purchaseToken =
    Number(transaction.amount0) < 0 ? transaction.token0 : transaction.token1;

  return {
    purchaseAmount: Math.abs(Number(purchaseAmount)),
    purchaseToken,
  };
};
