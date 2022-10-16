import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm() {
  return (
    <form className="w-full max-w-[1120px] mx-auto mt-16 px-6 flex gap-4">
      <input
        type="text"
        placeholder="Busque por transações"
        className="flex-1 rounded-md bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
      />
      <button
        type="submit"
        className="flex items-center gap-3 p-4 border border-green-300 text-green-300 font-bold rounded-md hover:bg-green-500 hover:text-white hover:border-green-500 hover:transition"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
