import { createPublicClient, http, getContract, Hex } from 'viem';

import {
  aleph,
  SETTINGS_ADDRESS,
  SETTINGS_ABI,
  ALEPH_URL,
} from '../../contract/constants';

import { Command } from './command';

type Payload = { address: Hex };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetSettingsCommand extends Command<Payload, any> {
  public readonly name = 'GetSettingsCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const transport = http(ALEPH_URL);

    const client = createPublicClient({
      chain: aleph,
      transport,
    });

    const contract = getContract({
      address: SETTINGS_ADDRESS,
      abi: SETTINGS_ABI,
      client,
    });

    const setting = await contract.read.getAddresses([this.payload.address]);

    return setting;
  }
}
