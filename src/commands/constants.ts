import { defineChain } from 'viem';

import { dwrAvatar, geoistAvatar, levertzAvatar, vitalikAvatar } from 'images';

export const COMMAND_BUS_REQUEST_MESSAGE = 'COMMAND_BUS_REQUEST_MESSAGE';
export const COMMAND_BUS_RESPONSE_MESSAGE = 'COMMAND_BUS_RESPONSE_MESSAGE';

export const UNISWAP_V3_SUBGRAPH_ID = {
  // MAINNET: '5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV',
  // POLYGON: '3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm',
  BASE: '43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG',
  CELO: 'ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4',
  OPTIMISM: 'Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj',
  // ARBITRUM: 'FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM',
} as const;

export const TWITTER_TO_ETH = {
  vitalikbuterin: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  dwr: '0xD7029BDEa1c17493893AAfE29AAD69EF892B8ff2',
  geoist_: '0xcCE9A28b570946123f392Cf1DbfA6D2D5e636a1f',
  levertz_: '0x4a3755eB99ae8b22AaFB8f16F0C51CF68Eb60b85',
} as const;

export const WARPCAST_TO_ETH = {
  'vitalik.eth': '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
  'dwr': '0xD7029BDEa1c17493893AAfE29AAD69EF892B8ff2',
  'geoist': '0xcCE9A28b570946123f392Cf1DbfA6D2D5e636a1f',
  'levertz': '0x4a3755eB99ae8b22AaFB8f16F0C51CF68Eb60b85',
} as const;

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

export const FILTERED_OUT_COINS = ['USDC', 'ETH', 'USDT', 'WETH', 'DAI'];

export const UNISWAP_V3_BASE_URL = `https://gateway.thegraph.com/api/${process.env.UNISWAP_API_KEY}`;

export const EXTENSION_BUTTON_CLICKED = 'EXTENSION_BUTTON_CLICKED';

export const ALEPH_URL = 'https://alephzero.drpc.org';
export const SETTINGS_ADDRESS = '0x88751b2Be2578825E8b7662d74f63639D0C10222';

export const SETTINGS_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newAddress',
        type: 'address',
      },
    ],
    name: 'addAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'addressMapping',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getAddresses',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_removeAddress',
        type: 'address',
      },
    ],
    name: 'removeAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export const aleph = defineChain({
  id: 41455,
  name: 'Aleph Zero EVM',
  network: 'aleph',
  nativeCurrency: {
    name: 'AZERO',
    symbol: 'AZERO',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.alephzero.raas.gelato.cloud'],
      webSocket: ['wss://ws.alephzero.raas.gelato.cloud'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Aleph Blockscout',
      url: 'https://evm-explorer.alephzero.org/',
      apiUrl: 'https://evm-explorer.alephzero.org/api',
    },
  },
  testnet: false,
});
