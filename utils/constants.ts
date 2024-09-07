const api_key = "";

export const UNISWAPV3_GRAPH_MAINNET =
    `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`;
export const UNISWAPV3_GRAPH_POLYGON =
    `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm`;
export const UNISWAPV3_GRAPH_BASE =
    `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG`;
export const UNISWAPV3_GRAPH_CELO =
    `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4`;
export const UNISWAPV3_GRAPH_OPTIMISM =
    `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj`;
export const UNISWAPV3_GRAPH_ARBITRUM =
    `https://gateway.thegraph.com/api/${api_key}/subgraphs/id/FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM`;

export const GRAPH_QL_QUERY = `
query Swaps($address: String!) {
  swaps(where: { origin: $address }) {
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
