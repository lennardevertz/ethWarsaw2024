import { Hex } from 'viem';

import { Command } from './command';

type Payload = {
  prompt: string;
  address: string;
};

export type BrianResponse = {
  result: [
    {
      solver: string;
      action: string;
      type: string;
      data: {
        description: string;
        steps: [
          {
            chainId: number;
            blockNumber: number;
            from: string;
            to: Hex;
            gasLimit: string;
            data: Hex;
            value: string;
            protocol: {
              key: string;
              name: string;
              logoURI: string;
            };
          },
        ];
        gasCostUSD: string;
        fromChainId: number;
        fromAmountUSD: number;
        fromAmount: string;
        fromToken: {
          address: string;
          chainId: number;
          symbol: string;
          decimals: number;
          name: string;
          coinKey: string;
          logoURI: string;
          priceUSD: string;
        };
        fromAddress: string;
        toChainId: number;
        toAmountUSD: number;
        toAmount: string;
        toAmountMin: string;
        toToken: {
          address: string;
          chainId: number;
          symbol: string;
          decimals: number;
          name: string;
          coinKey: string;
          logoURI: string;
          priceUSD: string;
        };
        toAddress: Hex;
        receiver: string;
        protocol: {
          key: string;
          name: string;
          logoURI: string;
        };
      };
    },
  ];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class GetBrianResponseCommand extends Command<Payload, BrianResponse> {
  public readonly name = 'GetBrianResponseCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const response = await fetch(
      'https://api.brianknows.org/api/v0/agent/transaction',
      {
        method: 'POST',
        headers: {
          'X-Brian-Api-Key': process.env.BRIAN_API_KEY,
          'Content-Type': 'application/json',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
        body: JSON.stringify({
          prompt: this.payload.prompt,
          address: this.payload.address,
        }),
      },
    );

    const responseBody = await response.json();
    return responseBody as BrianResponse;
  }
}
