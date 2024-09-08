import { CreatePaymentRequestCommand } from './create-payment-request';
import { GetEnsAddressCommand } from './get-address-ens-command';
import { GetAddressesEnsesCommand } from './get-addresses-enses-command';
import { GetSettingsCommand } from './get-settings';
import { GetLatestTransactionsCommand } from './get-latest-transactions';
import { GetWalletBalanceCommand } from './get-wallet-balance';
import { GetBrianResponseCommand } from './get-brian-response';

export const COMMAND_MAP = {
  [CreatePaymentRequestCommand.name]: CreatePaymentRequestCommand,
  [GetSettingsCommand.name]: GetSettingsCommand,
  [GetLatestTransactionsCommand.name]: GetLatestTransactionsCommand,
  [GetWalletBalanceCommand.name]: GetWalletBalanceCommand,
  [GetAddressesEnsesCommand.name]: GetAddressesEnsesCommand,
  [GetEnsAddressCommand.name]: GetEnsAddressCommand,
  [GetBrianResponseCommand.name]: GetBrianResponseCommand,
};
