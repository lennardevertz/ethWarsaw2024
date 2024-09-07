import { defineChain } from 'viem';

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

export const aleph = /*#__PURE__*/ defineChain({
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
