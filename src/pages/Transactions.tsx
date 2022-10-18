import { useTransactions } from '../contexts/TransactionsContext'

import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'

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
                  {transaction.price}
                </td>
                <td>{transaction.category}</td>
                <td>{String(transaction.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
