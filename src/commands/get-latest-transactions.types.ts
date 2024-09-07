import { UNISWAP_V3_SUBGRAPH_ID } from './constants';

export type LatestTransactionQueryResponse = {
  data: {
    swaps: Swap[];
  };
};

export type SwapWithNetworkInfo = Swap & {
  _network: keyof typeof UNISWAP_V3_SUBGRAPH_ID;
};

export type Token = {
  name: string;
  symbol: string;
};

export type Swap = {
  amount0: string;
  amount1: string;
  amountUSD: string;
  id: string;
  logIndex: string;
  origin: string;
  pool: {
    id: string;
  };
  recipient: string;
  sender: string;
  sqrtPriceX96: string;
  tick: string;
  timestamp: string;
  token0: Token;
  token1: Token;
  transaction: {
    id: string;
  };
};

export default {};
