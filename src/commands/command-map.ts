import { CreatePaymentRequestCommand } from './create-payment-request';
import { GetStarWarsCommand } from './get-star-wars-command';
import { ResolveEnsCommand } from './resolve-ens-command';

export const COMMAND_MAP = {
  [GetStarWarsCommand.name]: GetStarWarsCommand,
  [ResolveEnsCommand.name]: ResolveEnsCommand,
  [CreatePaymentRequestCommand.name]: CreatePaymentRequestCommand,
};
