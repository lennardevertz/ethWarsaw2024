import { privateKeyToAccount } from 'viem/accounts';
import { createWalletClient, Hex, http } from 'viem';
import { base } from 'viem/chains';

import { Command } from './command';

type Payload = { to: Hex; data: Hex; value: bigint };

export class SubmitDegenModeTransactionCommand extends Command<Payload, Hex> {
  public readonly name = 'SubmitDegenModeTransactionCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const account = privateKeyToAccount(process.env.PRIVATE_KEY as Hex);

    const client = createWalletClient({
      account,
      chain: base,
      transport: http(),
    });

    const degenTransaction = await client.sendTransaction({
      account: account,
      to: this.payload.to,
      value: this.payload.value,
      data: this.payload.data,
    });

    return degenTransaction;
  }
}
