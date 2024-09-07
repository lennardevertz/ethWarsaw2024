import { UNISWAP_V3_SUBGRAPH_ID } from "consts"

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
