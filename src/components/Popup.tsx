import { ReactNode } from 'react'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Cross } from './icons/Cross.svg'

interface Props {
  title?: string
  onClose?: () => void
  children?: ReactNode
  className?: string
}

const Popup = ({ title, onClose, children, className }: Props) => {
  return (
    <OpaqueContainer className={`flex flex-col gap-4 ${className} `}>
      <div className="flex justify-between">
        <div />
        <h1 className="animate-flicker">{title}</h1>
        <IconButton
          icon={<Cross className="fill-white green-drop-shadow" />}
          onClick={onClose}
        />
      </div>
      {children}
    </OpaqueContainer>
  )
}

export default Popup
