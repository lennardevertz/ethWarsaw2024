import { UNISWAP_V3_BASE_URL, UNISWAP_V3_SUBGRAPH_ID } from 'consts';

export const getUniswapV3GraphlUrl = (
  network: keyof typeof UNISWAP_V3_SUBGRAPH_ID,
) => {
  const subgraphId = UNISWAP_V3_SUBGRAPH_ID[network];
  return `${UNISWAP_V3_BASE_URL}/subgraphs/id/${subgraphId}`;
};
