import { useState } from 'react';

import { useSubscriptions, useWallet } from '../app/providers';

type ConfirmTransactionFormProps = {
  onConfirmClicked: (amount: number) => void;
};

export const ConfirmTransactionForm = ({
  onConfirmClicked,
}: ConfirmTransactionFormProps) => {
  const { balance, degenBalance } = useWallet();
  const { isDegenModeActive } = useSubscriptions();

  const [balancePercentage, setBalancePercentage] = useState(10);
  const currentETHBalance = isDegenModeActive ? degenBalance : balance;

  const totalValue = Number((currentETHBalance * balancePercentage) / 100);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <label
          htmlFor="percentageTemplate"
          className="block text-sm font-medium text-gray-700"
        >
          How much?
        </label>
        <p className="text-sm text-gray-600">
          {isDegenModeActive ? 'Degen' : ''} Balance:{' '}
          <span className="font-medium">
            {Number(currentETHBalance).toPrecision(4)} ETH{' '}
          </span>
        </p>
      </div>
      <input
        id="percentageTemplate"
        type="range"
        min="0"
        max="100"
        value={balancePercentage}
        onChange={(e) => {
          return setBalancePercentage(Number(e.target.value));
        }}
        className="mt-1 w-full outline-none"
      />
      <div className="flex items-center justify-between">
        <div className="mt-2 flex gap-2">
          <p className="text-sm text-gray-600">{balancePercentage}%</p>
          <p className="text-sm font-medium text-gray-600">
            {Number(totalValue).toPrecision(4)} ETH
          </p>
        </div>
        <button
          onClick={() => {
            return onConfirmClicked(totalValue);
          }}
          className="ml-auto rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white shadow-lg hover:bg-green-700"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
