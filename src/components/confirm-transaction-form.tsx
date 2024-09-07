import { useState } from "react"

export const ConfirmTransactionForm = () => {
  const [balancePercentage, setBalancePercentage] = useState(10)
  const currentETHBalance = 12

  const totalValue = Number(
    (currentETHBalance * balancePercentage) / 100
  ).toPrecision(2)

  return (
    <div className="px-4 py-4 expand-section">
      <div className="flex justify-between">
        <label
          htmlFor="percentageTemplate"
          className="block text-sm font-medium text-gray-700">
          How much?
        </label>
        <p className="text-sm text-gray-600">
          Balance: <span className="font-medium">{currentETHBalance} ETH </span>
        </p>
      </div>
      <input
        id="percentageTemplate"
        type="range"
        min="0"
        max="100"
        value={balancePercentage}
        onChange={(e) => setBalancePercentage(Number(e.target.value))}
        className="w-full mt-1 outline-none"
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 mt-2">
          <p className="text-sm text-gray-600">{balancePercentage}%</p>
          <p className="text-sm text-gray-600 font-medium">{totalValue} ETH</p>
        </div>
        <button
          onClick={() => {}}
          className={`bg-green-600 hover:bg-green-700"  text-white font-bold text-xs px-3 py-2 rounded-lg shadow-lg ml-auto`}>
          Confirm
        </button>
      </div>
    </div>
  )
}
