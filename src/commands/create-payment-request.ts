import { EthereumPrivateKeySignatureProvider } from '@requestnetwork/epk-signature';
import {
  RequestNetwork,
  Types,
  Utils,
} from '@requestnetwork/request-client.js';
import { parseUnits, Hex } from 'viem';
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';

import { Command } from './command';

type Payload = {
  payer: Hex;
  recipient: Hex;
  amount: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CreatePaymentRequestCommand extends Command<Payload, any> {
  public readonly name = 'CreatePaymentRequestCommand' as const;

  constructor(public payload: Payload) {
    super();
  }

  async handle() {
    const tempPrivateKey = generatePrivateKey();
    const tempAddress = privateKeyToAccount(tempPrivateKey).address;
    const epkSignatureProvider = new EthereumPrivateKeySignatureProvider({
      privateKey: tempPrivateKey,
      method: Types.Signature.METHOD.ECDSA,
    });

    const requestClient = new RequestNetwork({
      nodeConnectionConfig: {
        baseURL: 'https://gnosis.gateway.request.network/',
      },
      signatureProvider: epkSignatureProvider,
    });

    const payeeIdentity = tempAddress;
    const payerIdentity = this.payload.payer;
    const paymentRecipient = this.payload.recipient;
    const feeRecipient = '0x0000000000000000000000000000000000000000';

    const requestCreateParameters = {
      requestInfo: {
        // Request payment in ETH
        currency: {
          type: Types.RequestLogic.CURRENCY.ETH,
          value: 'ETH',
          network: 'base' as const,
        },

        // The expected amount as a string, in parsed units, respecting `decimals`
        // amount is for instance 0.01 (ETH)
        expectedAmount: parseUnits(this.payload.amount, 18).toString(),

        // We set payee == recipient
        payee: {
          type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
          value: payeeIdentity,
        },

        // The payer identity.
        payer: {
          type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
          value: payerIdentity,
        },

        // The request creation timestamp.
        timestamp: Utils.getCurrentTimestampInSecond(),
      },

      // The paymentNetwork is the method of payment and related details.
      paymentNetwork: {
        id: Types.Extension.PAYMENT_NETWORK_ID.ETH_FEE_PROXY_CONTRACT as const,
        parameters: {
          paymentNetworkName: 'base' as const,
          paymentAddress: paymentRecipient,
          feeAddress: feeRecipient,
          feeAmount: '0',
        },
      },

      // The contentData can contain anything.
      contentData: {
        note: '🚀🎩💸',
        creationDate: '2024.09.07',
        invoiceNumber: '69',
        paymentTerms: {
          dueDate: '2024.12.31',
        },
      },

      // The identity that signs the request, either payee or payer identity.
      signer: {
        type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
        value: tempAddress,
      },
    };

    const request = await requestClient.createRequest(requestCreateParameters);

    const confirmedRequestData = await request.waitForConfirmation();
    return confirmedRequestData;
  }
}
