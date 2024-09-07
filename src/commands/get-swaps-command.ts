import { Command } from './command';

type Payload = Record<string, never>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetStarWarsCommand extends Command<Payload, any> {
  public readonly name = 'GetStarWarsCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const swapiResponse = await fetch('https://swapi.dev/api/people/1');
    const responseBody = await swapiResponse.json();

    return responseBody;
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
