import { CreatePaymentRequestCommand } from './create-payment-request';
import { GetEnsAddressCommand } from './get-ens-address-command';
import { GetSettingsCommand } from './get-settings';
import { GetLatestTransactionsCommand } from './get-latest-transactions';
import { GetWalletBalanceCommand } from './get-wallet-balance';
import { GetBrianResponseCommand } from './get-brian-response';

export const COMMAND_MAP = {
  [GetEnsAddressCommand.name]: GetEnsAddressCommand,
  [CreatePaymentRequestCommand.name]: CreatePaymentRequestCommand,
  [GetSettingsCommand.name]: GetSettingsCommand,
  [GetLatestTransactionsCommand.name]: GetLatestTransactionsCommand,
  [GetWalletBalanceCommand.name]: GetWalletBalanceCommand,
  [GetBrianResponseCommand.name]: GetBrianResponseCommand,
};
