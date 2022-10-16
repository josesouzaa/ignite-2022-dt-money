import { Header } from '../components/Header'
import { SearchForm } from '../components/SearchForm'
import { Summary } from '../components/Summary'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <SearchForm />

      <main className="w-full max-w-[1120px] mx-auto mt-6 px-6">
        <table className="mainTable">
          <tbody>
            <tr>
              <td className="w-2/5">Desenvolvimento de site</td>
              <td className="text-green-300">R$ 12.000,00</td>
              <td>Venda</td>
              <td>10/10/2022</td>
            </tr>

            <tr>
              <td className="w-2/5">Hamburguer</td>
              <td className="text-red-300">-R$ 500,00</td>
              <td>Alimentação</td>
              <td>08/10/2022</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
