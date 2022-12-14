import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './NewTransactionModal'

import { Logo } from '../assets/Logo'

export function Header() {
  return (
    <header className="bg-gray-900 pt-10 pb-[7.5rem]">
      <div className="w-full max-w-[1120px] mx-auto px-6 flex justify-between items-center">
        <Logo />

        <Dialog.Root>
          <Dialog.Trigger className="h-[50px] bg-green-500 text-white font-bold px-5 rounded-md cursor-pointer hover:transition hover:bg-green-700">
            Nova transação
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
