import { CreatePaymentRequestCommand } from './create-payment-request';
import { GetEnsAddressCommand } from './get-ens-address-command';
import { GetLatestTransactionsCommand } from './get-latest-transactions';
import { GetWalletBalanceCommand } from './get-wallet-balance';

export const COMMAND_MAP = {
  [GetEnsAddressCommand.name]: GetEnsAddressCommand,
  [CreatePaymentRequestCommand.name]: CreatePaymentRequestCommand,
  [GetLatestTransactionsCommand.name]: GetLatestTransactionsCommand,
  [GetWalletBalanceCommand.name]: GetWalletBalanceCommand,
};
