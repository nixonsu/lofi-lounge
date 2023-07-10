import IconButton from '@components/IconButton'
import OpaqueContainer from '@components/OpaqueContainer'
import { ReactComponent as CloseIcon } from 'pixelarticons/svg/close.svg'
import { ReactNode } from 'react'

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
