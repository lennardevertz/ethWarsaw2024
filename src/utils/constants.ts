export const UNISWAP_V3_SUBGRAPH_ID = {
  MAINNET: '5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV',
  POLYGON: '3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm',
  BASE: '43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG',
  CELO: 'ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4',
  OPTIMISM: 'Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj',
  ARBITRUM: 'FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM'
} as const;

export const TWITTER_TO_ETH = {
  'vitalikbuterin': '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  'dwr': '0xD7029BDEa1c17493893AAfE29AAD69EF892B8ff2',
  'geoist_': '0xcCE9A28b570946123f392Cf1DbfA6D2D5e636a1f',
  'levertz_': '0x4a3755eB99ae8b22AaFB8f16F0C51CF68Eb60b85'
}

export const FILTERED_OUT_COINS = ['USDC', "ETH", 'USDT', 'WETH', 'DAI']

const UNISWAP_V3_BASE_URL = `https://gateway.thegraph.com/api/${process.env.PLASMO_PUBLIC_UNISWAP_API_KEY}`;

export const getUniswapV3GraphlUrl = (network: keyof typeof UNISWAP_V3_SUBGRAPH_ID) => {
  const subgraphId = UNISWAP_V3_SUBGRAPH_ID[network];
  return `${UNISWAP_V3_BASE_URL}/subgraphs/id/${subgraphId}`
}

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
