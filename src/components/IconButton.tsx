import { ReactNode } from 'react'
import ScaleAnimation from './animations/ScaleAnimation'

interface Props {
  icon: ReactNode
  onClick?: () => void
  isEnabled?: boolean
  isRedGlow?: boolean
}

const IconButton = ({
  icon,
  onClick,
  isEnabled = true,
  isRedGlow = false,
}: Props) => {
  return (
    <ScaleAnimation scaleFactor={1.1}>
      <button className="h-6 w-6" onClick={onClick}>
        <span
          className={`${
            isEnabled ? 'fill-white' : 'fill-black'
          } transition-fill duration-500 ${
            isRedGlow ? 'red-drop-shadow' : 'green-drop-shadow'
          }`}
        >
          {icon}
        </span>
      </button>
    </ScaleAnimation>
  )
}

export default IconButton
