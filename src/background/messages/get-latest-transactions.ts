import type { PlasmoMessaging } from "@plasmohq/messaging"
import { getUniswapV3GraphlUrl, GRAPH_QL_QUERY, UNISWAP_V3_SUBGRAPH_ID } from "~utils";
import type { LatestTransactionQueryResponse, SwapWithNetworkInfo } from "./get-latest-transactions.types";


const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const allNetworks = Object.keys(UNISWAP_V3_SUBGRAPH_ID).map(
      async (network: keyof typeof UNISWAP_V3_SUBGRAPH_ID) => {
        const query = GRAPH_QL_QUERY;
        const response = await fetch(getUniswapV3GraphlUrl(network), {
          method: 'POST',
          body: JSON.stringify({
            query: query,
            operationName: '',
            variables: {
              address: req.body.address,
            },
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const responseBody: LatestTransactionQueryResponse = await response.json()

        const networkTransactions: SwapWithNetworkInfo[] = 
          responseBody.data.swaps.map(swap => { return { ...swap, _network: network } })
        

        return networkTransactions
      })

    const result = await Promise.all(allNetworks)
    res.send(result.flatMap(v => v))
  } catch (err) {
    console.error('❌', err)
    res.send([])
  }
}

export default handler
