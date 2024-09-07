import {
  dwrAvatar,
  geoistAvatar,
  levertzAvatar,
  vitalikAvatar,
} from './images';

export const UNISWAP_V3_SUBGRAPH_ID = {
  MAINNET: '5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV',
  POLYGON: '3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm',
  BASE: '43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG',
  CELO: 'ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4',
  OPTIMISM: 'Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj',
  ARBITRUM: 'FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM',
} as const;

export const UNISWAP_V3_BASE_URL = `https://gateway.thegraph.com/api/${process.env.UNISWAP_API_KEY}`;
export const EXTENSION_BUTTON_CLICKED = 'EXTENSION_BUTTON_CLICKED';

export const ENS_TO_TWITTER: Record<string, string> = {
  'vitalik.eth': 'vitalikbuterin',
  'dwr.eth': 'dwr',
  'levertz.eth': '_geoist',
  'geoist.eth': '_levertz',
};

export const ENS_TO_FARCASTER: Record<string, string> = {
  'vitalik.eth': 'vitalik.eth',
  'dwr.eth': 'dwr',
  'levertz.eth': 'levertz',
  'geoist.eth': 'geoist',
};

export const ENS_TO_AVATAR: Record<string, string> = {
  'geoist.eth': geoistAvatar,
  'levertz.eth': levertzAvatar,
  'dwr.eth': dwrAvatar,
  'vitalik.eth': vitalikAvatar,
};
