export const UNISWAP_V3_SUBGRAPH_ID = {
  MAINNET: '5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV',
  POLYGON: '3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm',
  BASE: '43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG',
  CELO: 'ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4',
  OPTIMISM: 'Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj',
  ARBITRUM: 'FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM',
} as const;

export const UNISWAP_V3_BASE_URL = `https://gateway.thegraph.com/api/${process.env.PLASMO_PUBLIC_UNISWAP_API_KEY}`;
