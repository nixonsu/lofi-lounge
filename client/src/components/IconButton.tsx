import { ReactNode } from 'react'
import ScaleAnimation from './animations/ScaleAnimation'

interface Props {
  icon: ReactNode
  onClick?: () => void
}

const IconButton = ({ icon, onClick }: Props) => {
  return (
    <ScaleAnimation scaleFactor={1.1}>
      <button className="h-6 w-6" onClick={onClick}>
        {icon}
      </button>
    </ScaleAnimation>
  )
}

export default IconButton
