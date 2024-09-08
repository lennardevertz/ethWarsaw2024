import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { normalize } from 'viem/ens';

import { Command } from './command';

type Payload = {
  ensName: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetEnsEmailCommand extends Command<Payload, string | null> {
  public readonly name = 'GetEnsEmailCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  handle() {
    const client = createPublicClient({
      chain: { ...mainnet, fees: undefined },
      transport: http(),
    });

    return client.getEnsText({
      name: normalize(this.payload.ensName),
      key: 'email',
    });
  }
}
