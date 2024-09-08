import { createPublicClient, getAddress, http } from 'viem';
import { mainnet } from 'viem/chains';

import { Command } from './command';

type Payload = {
  addresses: string[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetAddressesEnsesCommand extends Command<
  Payload,
  Record<string, string>
> {
  public readonly name = 'GetAddressesEnsesCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const client = createPublicClient({
      chain: { ...mainnet, fees: undefined },
      transport: http(),
    });

    const requests = this.payload.addresses.map(async (address) => {
      const ensName = await client.getEnsName({
        address: getAddress(address),
      });
      return [address, ensName];
    });

    const responses = await Promise.all(requests);
    return Object.fromEntries(responses) as Record<string, string>;
  }
}
