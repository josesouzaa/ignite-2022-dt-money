import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react'
import { useTransactions } from '../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string()
})

type SerachFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useTransactions()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SerachFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SerachFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <form
      className="w-full max-w-[1120px] mx-auto mt-16 px-6 flex gap-4"
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
        className="flex-1 rounded-md bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center gap-3 p-4 border border-green-300 text-green-300 font-bold rounded-md disabled:opacity-60 disabled:cursor-not-allowed enabled:hover:bg-green-500 enabled:hover:text-white enabled:hover:border-green-500 enabled:hover:transition"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
