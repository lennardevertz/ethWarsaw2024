import { createPublicClient, http, getContract, Hex, getAddress } from 'viem';
import { mainnet } from 'viem/chains';

import { aleph, ALEPH_URL, SETTINGS_ABI, SETTINGS_ADDRESS } from 'consts';

import { Command } from './command';

type Payload = { address: Hex };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetSettingsCommand extends Command<
  Payload,
  Record<string, string>
> {
  public readonly name = 'GetSettingsCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const transport = http(ALEPH_URL);
    const alephClient = createPublicClient({
      chain: aleph,
      transport,
    });

    const mainnetClient = createPublicClient({
      chain: mainnet,
      transport: http(),
    });

    const contract = getContract({
      address: SETTINGS_ADDRESS,
      abi: SETTINGS_ABI,
      client: alephClient,
    });

    const addresses = await contract.read.getAddresses([this.payload.address]);

    const requests = addresses.map(async (address) => {
      const ensName = await mainnetClient.getEnsName({
        address: getAddress(address),
      });
      return [address, ensName];
    });

    const responses = await Promise.all(requests);
    return Object.fromEntries(responses) as Record<string, string>;
  }
}
