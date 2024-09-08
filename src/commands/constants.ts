import { defineChain } from 'viem';

import { dwrAvatar, geoistAvatar, levertzAvatar, vitalikAvatar } from 'images';

export const COMMAND_BUS_REQUEST_MESSAGE = 'COMMAND_BUS_REQUEST_MESSAGE';
export const COMMAND_BUS_RESPONSE_MESSAGE = 'COMMAND_BUS_RESPONSE_MESSAGE';

export const UNISWAP_V3_SUBGRAPH_ID = {
  MAINNET: '5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV',
  POLYGON: '3hCPRGf4z88VC5rsBKU5AA9FBBq5nF3jbKJG7VZCbhjm',
  BASE: '43Hwfi3dJSoGpyas9VwNoDAv55yjgGrPpNSmbQZArzMG',
  CELO: 'ESdrTJ3twMwWVoQ1hUE2u7PugEHX3QkenudD6aXCkDQ4',
  OPTIMISM: 'Cghf4LfVqPiFw6fp6Y5X5Ubc8UpmUhSfJL82zwiBFLaj',
  ARBITRUM: 'FbCGRftH4a3yZugY7TnbYgPJVEv2LvMT6oF1fxPe9aJM',
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
