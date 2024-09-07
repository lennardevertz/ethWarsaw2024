import { EIP1193Provider, Hex } from "viem";

export type Wallet = {
  provider: EIP1193Provider;
  account: Hex;
  chainId: number;
};
