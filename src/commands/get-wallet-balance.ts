import { createPublicClient, formatEther, Hex, http } from 'viem';
import { base } from 'viem/chains';

import { Command } from './command';

type Payload = { walletAddress: Hex | null };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetWalletBalanceCommand extends Command<Payload, any> {
  public readonly name = 'GetWalletBalanceCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    if (!this.payload.walletAddress) {
      return 0;
    }
    const publicClient = createPublicClient({
      chain: base,
      transport: http(),
    });

    const value = await publicClient.getBalance({
      address: this.payload.walletAddress,
      // address: '0x4a3755eB99ae8b22AaFB8f16F0C51CF68Eb60b85',
    });

    return Number(formatEther(value));
  }
}
