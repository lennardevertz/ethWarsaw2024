const UNISWAP_V3_SUBGRAPH_ID = {
  ETHEREUM: "5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV",
  POLYGON: "3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm",
  BASE: "43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG",
  CELO: "ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4",
  OPTIMISM: "Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj",
  ARBITRUM: "FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM"
} as const

const UNISWAP_V3_BASE_URL = `https://gateway.thegraph.com/api/${process.env.PLASMO_PUBLIC_UNISWAP_API_KEY}`
const TOKEN_LOGO_BASE_URL = `https://github.com/trustwallet/assets/tree/master/blockchains`

export const getUniswapV3GraphlUrl = (
  network: keyof typeof UNISWAP_V3_SUBGRAPH_ID
) => {
  const subgraphId = UNISWAP_V3_SUBGRAPH_ID[network]
  return `${UNISWAP_V3_BASE_URL}/subgraphs/id/${subgraphId}`
}

// ToDo: token address must be checksummed
export const getTokenIconUrl = (
  network: keyof typeof UNISWAP_V3_SUBGRAPH_ID,
  token_address: string
) => {
  return `${TOKEN_LOGO_BASE_URL}/${network.toLowerCase()}/assets/${token_address}/logo.png`
}

/**
 * 
 * @param outputToken Ticker of token user wants to buy
 * @param outputNetwork Target network, == inputNetwork for simple token swap action
 * @param inputAmount absolute amount you want to buy -> example 0.001 (if you want to buy 0.001ETH worth of outputToken)
 * @param inputToken Token used for buying
 * @param inputNetwork Network the user buys from
 * @returns Prompt that can be used in resolve-brian
 */
export const getBrianPrompt = (
  outputToken: string,
  outputNetwork: keyof typeof UNISWAP_V3_SUBGRAPH_ID,
  inputAmount: number,
  inputToken: string = "ETH",
  inputNetwork: keyof typeof UNISWAP_V3_SUBGRAPH_ID = "BASE"
) => {
  if (inputNetwork===outputNetwork) {
    return `Swap ${inputAmount} of ${inputToken} to ${outputToken} on ${inputNetwork}`
  }
  return`Crosschain swap ${inputAmount} of ${inputToken} on ${inputNetwork} to ${outputToken} on ${outputNetwork}`
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
`
