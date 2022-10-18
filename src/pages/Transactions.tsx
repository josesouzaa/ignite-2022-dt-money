import { useTransactions } from '../contexts/TransactionsContext'

import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'

import { dateFormatter, priceFormatter } from '../utils/formatter'

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <div>
      <Header />
      <Summary />

      <SearchForm />

      <main className="w-full max-w-[1120px] mx-auto mt-6 px-6">
        <table className="mainTable">
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="w-2/5">{transaction.description}</td>
                <td
                  className={
                    transaction.type === 'income'
                      ? 'text-green-300'
                      : 'text-red-300'
                  }
                >
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
