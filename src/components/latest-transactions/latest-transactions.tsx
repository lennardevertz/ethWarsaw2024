import { useState } from 'react';

import { SwapWithNetworkInfo, useCommandQuery } from 'commands';
import { GetLatestTransactionsCommand } from 'src/commands/get-latest-transactions';

import { TransactionListItem } from './transaction-list-item';

type LatestTransactionsProps = {
  walletAddress: string;
};

export const LatestTransactions = ({
  walletAddress,
}: LatestTransactionsProps) => {
  const [transactionWithOpenedFormId, setTransactionWithOpenedFormId] =
    useState<string>();

  const transactions = useCommandQuery({
    command: new GetLatestTransactionsCommand({ addresses: [walletAddress] }),
  });

  const transactionsData = transactions.data as
    | SwapWithNetworkInfo[]
    | undefined;

  if (!transactionsData?.length) {
    return null;
  }

  console.log('transactionsData', transactionsData);

  return (
    <div className="absolute right-10 top-20 w-96 max-w-lg rounded-lg border-l-4 border-gray-400 bg-gray-200 px-4 py-2">
      <ul role="list" className="divide-y divide-gray-100">
        {transactionsData?.map((transaction) => {
          const isTransactionFormOpened =
            transactionWithOpenedFormId === transaction.id;

          return (
            <TransactionListItem
              className={
                transactionWithOpenedFormId && !isTransactionFormOpened
                  ? 'opacity-40'
                  : ''
              }
              isTransactionFormOpened={isTransactionFormOpened}
              onFormToggleClick={(transactionId) => {
                return setTransactionWithOpenedFormId(
                  isTransactionFormOpened ? undefined : transactionId,
                );
              }}
              transaction={transaction}
              key={transaction.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
