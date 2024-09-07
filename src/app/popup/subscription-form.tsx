import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { GetEnsAddressCommand, useCommandMutation } from 'commands';
import { Subscription } from 'types';
import { ENS_TO_AVATAR, ENS_TO_FARCASTER, ENS_TO_TWITTER } from 'consts';

type SubscriberForm = {
  ensName: string;
};

type Props = {
  onSubmit: (subscription: Subscription) => void;
};

const EMPTY_FORM: SubscriberForm = {
  ensName: '',
};

export const SubscriptionForm = ({ onSubmit }: Props) => {
  const form = useForm<SubscriberForm>({
    defaultValues: EMPTY_FORM,
  });

  const getEnsAddressMutation = useCommandMutation(GetEnsAddressCommand);

  const addSubscriber: SubmitHandler<SubscriberForm> = useCallback(
    async (data) => {
      const address = await getEnsAddressMutation.mutateAsync({
        ensName: data.ensName,
      });
      if (!address) {
        return;
      }
      onSubmit({
        ensName: data.ensName,
        avatarSrc: ENS_TO_AVATAR[data.ensName],
        walletAddress: address,
        twitterUsername: ENS_TO_TWITTER[data.ensName],
        farcasterUsername: ENS_TO_FARCASTER[data.ensName],
      });
      form.reset(EMPTY_FORM);
    },
    [form, getEnsAddressMutation, onSubmit],
  );

  return (
    <form onSubmit={form.handleSubmit(addSubscriber)}>
      <label
        htmlFor="subscriptionName"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Subscribe to Wallet
      </label>
      <input
        {...form.register('ensName')}
        type="text"
        id="subscriptionName"
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        placeholder="e.g., vitalik.eth"
      />
    </form>
  );
};
