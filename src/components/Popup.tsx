import { ReactNode } from 'react'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as CloseIcon } from 'pixelarticons/svg/close.svg'

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
        <IconButton icon={<CloseIcon />} onClick={onClose} />
      </div>
      {children}
    </OpaqueContainer>
  )
}

export default Popup
