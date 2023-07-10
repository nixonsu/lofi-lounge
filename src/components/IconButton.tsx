import ScaleAnimation from '@components/animations/ScaleAnimation'
import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  onClick?: () => void
  isEnabled?: boolean
  isRedGlow?: boolean
  className?: string
}

const IconButton = ({
  icon,
  onClick,
  isEnabled = true,
  isRedGlow = false,
  className,
}: Props) => {
  return (
    <ScaleAnimation scaleFactor={1.1}>
      <button className={`${className} h-6 w-6`} onClick={onClick}>
        <span
          className={`${
            isEnabled ? 'fill-white' : 'fill-black'
          } transition-fill duration-500 ${
            isRedGlow ? 'red-drop-shadow' : 'drop-shadow-theme'
          }`}
        >
          {icon}
        </span>
      </button>
    </ScaleAnimation>
  )
}

export default IconButton
