import { getPurchasedToken, getUniswapV3GraphlUrl } from 'utils';

import { Command } from './command';
import { FILTERED_OUT_COINS, UNISWAP_V3_SUBGRAPH_ID } from './constants';
import {
  LatestTransactionQueryResponse,
  SwapWithNetworkInfo,
} from './get-latest-transactions.types';

type Payload = { addresses: string[] };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetLatestTransactionsCommand extends Command<Payload, any> {
  public readonly name = 'GetLatestTransactionsCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    try {
      const allNetworks = Object.keys(UNISWAP_V3_SUBGRAPH_ID).map(
        async (network) => {
          const query = GRAPH_QL_QUERY;
          const response = await fetch(
            getUniswapV3GraphlUrl(
              network as keyof typeof UNISWAP_V3_SUBGRAPH_ID,
            ),
            {
              method: 'POST',
              body: JSON.stringify({
                query: query,
                operationName: '',
                variables: {
                  addresses: this.payload.addresses,
                },
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
          const responseBody =
            (await response.json()) as Partial<LatestTransactionQueryResponse>;

          const networkTransactions = responseBody.data?.swaps.map((swap) => {
            return { ...swap, _network: network };
          });

          return networkTransactions as SwapWithNetworkInfo[];
        },
      );

      const result = await Promise.all(allNetworks);
      return result
        .flatMap((v) => {
          return v;
        })
        .filter((v) => {
          return (
            v &&
            !FILTERED_OUT_COINS.includes(
              getPurchasedToken(v).purchaseToken.symbol,
            )
          );
        })
        .sort((a, b) => {
          return Number(b.timestamp) - Number(a.timestamp);
        })
        .slice(0, 3);
    } catch (err) {
      console.error('❌', err);
      return [];
    }
  }
}

export const GRAPH_QL_QUERY = `
query Swaps($addresses: [String]!) {
  swaps(where: { origin_in: $addresses }) {
    id
    transaction {
      id
    }
    timestamp
    pool {
      id
    }
    token0 {
      symbol
      name
    }
    token1 {
      symbol
      name
    }
    sender
    recipient
    origin
    amount0
    amount1
    amountUSD
    sqrtPriceX96
    tick
    logIndex
  }
}
`;
