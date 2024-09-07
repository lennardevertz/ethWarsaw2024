import { CreatePaymentRequestCommand } from './create-payment-request';
import { GetEnsAddressCommand } from './get-ens-address-command';
import { GetSettingsCommand } from './get-settings';

export const COMMAND_MAP = {
  [GetEnsAddressCommand.name]: GetEnsAddressCommand,
  [CreatePaymentRequestCommand.name]: CreatePaymentRequestCommand,
  [GetSettingsCommand.name]: GetSettingsCommand,
};
