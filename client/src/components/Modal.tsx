import IconButton from './IconButton'
import { ReactComponent as Cross } from './icons/Cross.svg'
import { observer } from 'mobx-react'

interface ModalProps {
  title?: string
  isOpen?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex flex-col p-4 bg-black opacity-80 gap-5">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <IconButton icon={<Cross className="fill-white" />} onClick={onClose} />
      </div>
      {children}
    </div>
  )
}

export default observer(Modal)
