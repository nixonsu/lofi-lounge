import IconButton from './IconButton'
import { ReactComponent as Cross } from './icons/Cross.svg'

interface ModalProps {
  title?: string
  onClose?: () => void
  children?: React.ReactNode
}

const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex flex-col p-4 bg-black opacity-80 gap-5">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <IconButton
          icon={<Cross className="fill-white green-drop-shadow" />}
          onClick={onClose}
        />
      </div>
      {children}
    </div>
  )
}

export default Modal
