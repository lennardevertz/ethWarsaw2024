import { createPublicClient, Hex, http } from 'viem';
import { mainnet } from 'viem/chains';
import { normalize } from 'viem/ens';

import { Command } from './command';

type Payload = {
  domain?: string;
  address?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ResolveEnsCommand extends Command<Payload, any> {
  public readonly name = 'ResolveEnsCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const client = createPublicClient({
      chain: { ...mainnet, fees: undefined },
      transport: http(),
    });

    if (this.payload.domain) {
      const resolvedAddress = await client.getEnsAddress({
        name: normalize(this.payload.domain),
      });
      return resolvedAddress;
    }

    if (this.payload.address) {
      const resolvedName = await client.getEnsName({
        address: this.payload.address as Hex,
      });

      return resolvedName;
    }

    return;
  }
}
