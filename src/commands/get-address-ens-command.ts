import { createPublicClient, Hex, http } from 'viem';
import { mainnet } from 'viem/chains';
import { normalize } from 'viem/ens';

import { Command } from './command';

type Payload = {
  ensName: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetEnsAddressCommand extends Command<Payload, Hex | null> {
  public readonly name = 'GetEnsAddressCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  handle() {
    const client = createPublicClient({
      chain: { ...mainnet, fees: undefined },
      transport: http(),
    });

    return client.getEnsAddress({
      name: normalize(this.payload.ensName),
    });
  }
}
