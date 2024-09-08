import { Hex } from 'viem';
import { useEffect } from 'react';

import { CreatePaymentRequestCommand, useCommandMutation } from 'commands';

import { useSubscriptions, useWallet } from '../providers';

export const PopupSettings = () => {
  const { isDegenModeActive, toggleDegenMode } = useSubscriptions();
  const { degenBalance, wallet } = useWallet();

  const degenRequestMutation = useCommandMutation(CreatePaymentRequestCommand);

  const degenCharge = () => {
    degenRequestMutation.mutateAsync({
      amount: '0.001',
      payer: wallet?.account as Hex,
      recipient: process.env.DEGEN_MODE_ADDRESS as Hex,
    });
  };

  useEffect(() => {
    if (degenRequestMutation.isSuccess) {
      const link = document.createElement('a');
      link.href = 'https://invoicing.request.network/';
      link.target = '_blank';
      link.rel = 'noreferrer';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }, [degenRequestMutation.isSuccess]);

  return (
    <>
      <div className="mt-4">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          Settings
        </p>
        <div className="flex flex-col items-start justify-start">
          <div className="mt-1 flex items-center">
            <div className="group relative mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 cursor-pointer text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              <div className="absolute bottom-full mb-2 hidden min-w-[285px] rounded-lg bg-gray-800 px-2 py-1 text-xs text-white group-hover:block">
                Degen Mode requires a deposit to a prepaid wallet to enable
                1-click transactions.
              </div>
            </div>
            <label htmlFor="degenToggle" className="mr-2 text-sm text-gray-900">
              Degen Mode
            </label>
            <label className="inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                id="degenToggle"
                onChange={toggleDegenMode}
                checked={isDegenModeActive}
                className="peer sr-only"
              />
              <div className="peer relative h-4 w-8 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-0.5 after:size-3 after:rounded-full after:bg-white after:transition-transform after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-4 peer-hover:bg-gray-400 peer-hover:peer-checked:bg-green-700" />
            </label>
          </div>
        </div>
      </div>
      {isDegenModeActive && (
        <div
          id="prepaidWallet"
          className="mt-1 flex items-center justify-start"
        >
          <p className="text-sm text-gray-900">
            Degen balance:
            <span> {Number(degenBalance).toPrecision(4)} ETH</span>
          </p>
          <button
            onClick={degenCharge}
            className="ml-2 rounded-full bg-green-600 p-2 font-black text-white shadow-lg hover:bg-green-700"
          >
            {degenRequestMutation.isPending ? (
              <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-2 font-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="6"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </button>
        </div>
      )}
    </>
  );
};
