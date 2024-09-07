import { CreatePaymentRequestCommand } from './create-payment-request';
import { GetEnsAddressCommand } from './get-ens-address-command';

export const COMMAND_MAP = {
  [GetEnsAddressCommand.name]: GetEnsAddressCommand,
  [CreatePaymentRequestCommand.name]: CreatePaymentRequestCommand,
};
