import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  onClick?: () => void
}

const IconButton = ({ icon, onClick }: Props) => {
  return (
    <button className="h-6 w-6" onClick={onClick}>
      {icon}
    </button>
  )
}

export default IconButton
