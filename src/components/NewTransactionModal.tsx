import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string()
  // type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-[rgba(0,0,0,0.75)]" />

      <Dialog.Content className="min-w-[32rem] rounded-md py-10 px-12 bg-gray-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Dialog.Title className="font-bold text-2xl text-gray-100">
          Nova Transação
        </Dialog.Title>

        <Dialog.Close>
          <X
            size={24}
            className="absolute top-[1.5rem] right-[1.5rem] text-gray-500"
          />
        </Dialog.Close>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <input
            className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <RadioGroup.Root className="grid grid-cols-2 gap-4 mt-2">
            <RadioGroup.Item value="income" className="btnModal income">
              <ArrowCircleUp size={24} className="text-green-300" />
              Entrada
            </RadioGroup.Item>

            <RadioGroup.Item value="outcome" className="btnModal outcome">
              <ArrowCircleDown size={24} className="text-red-300" />
              Saída
            </RadioGroup.Item>
          </RadioGroup.Root>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-[58px] bg-green-500 text-white font-bold px-5 rounded-md mt-6 disabled:opacity-60 disabled:cursor-not-allowed enabled:hover:bg-green-700 transition"
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
