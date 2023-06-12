import IconButton from './IconButton'
import { ReactComponent as Cross } from './icons/Cross.svg'

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex flex-col p-4 bg-black opacity-50">
      <div className="flex justify-between">
        <h1>Modal title</h1>
        <IconButton icon={<Cross className="fill-white" />} onClick={onClose} />
      </div>
    </div>
  )
}

export default Modal
