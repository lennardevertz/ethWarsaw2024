import { privateKeyToAccount } from 'viem/accounts';
import { createWalletClient, Hex, http } from 'viem';

import { aleph } from 'consts';

import { Command } from './command';

type Payload = { to: Hex; data: Hex; value: bigint };

export class SubmitDegenModeTransactionCommand extends Command<Payload, Hex> {
  public readonly name = 'SubmitDegenModeTransactionCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const account = privateKeyToAccount(process.env.private_key as Hex);

    const client = createWalletClient({
      account,
      chain: aleph,
      transport: http(),
    });

    const degenTransaction = await client.sendTransaction({
      account: account.address,
      to: this.payload.to,
      value: this.payload.value,
      data: this.payload.data,
    });

    return degenTransaction;
  }
}
