import { useSummary } from '../hooks/useSummary'

import { priceFormatter } from '../utils/formatter'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  const summary = useSummary()

  return (
    <section className="w-full max-w-[1120px] mx-auto px-6 grid grid-cols-3 gap-8 -mt-20">
      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Entradas</span>
          <ArrowCircleUp size={32} className="text-green-300" />
        </header>

        <strong className="mt-4 text-[2rem]">
          {priceFormatter.format(summary.income)}
        </strong>
      </div>

      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Saídas</span>
          <ArrowCircleDown size={32} className="text-red-300" />
        </header>

        <strong className="mt-4 text-[2rem]">
          {priceFormatter.format(summary.outcome)}
        </strong>
      </div>

      <div className="bg-green-700 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} className="text-white" />
        </header>

        <strong className="mt-4 text-[2rem]">
          {priceFormatter.format(summary.total)}
        </strong>
      </div>
    </section>
  )
}
