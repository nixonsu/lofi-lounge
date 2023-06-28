import { ReactNode } from 'react'
import IconButton from './IconButton'
import { ReactComponent as Cross } from './icons/Cross.svg'

interface ModalProps {
  title?: string
  onClose?: () => void
  children?: ReactNode
}

const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex flex-col p-4 bg-black opaque gap-5">
      <div className="flex justify-between">
        <div />
        <h1 className="animate-flicker">{title}</h1>
        <IconButton icon={<Cross />} onClick={onClose} />
      </div>
      {children}
    </div>
  )
}

export default Modal
