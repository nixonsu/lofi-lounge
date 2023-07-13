import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => void
}

const OpaqueContainer = ({ children, className, onClick }: Props) => {
  return (
    <div
      className={`rounded-lg bg-black bg-opacity-70 p-4 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default OpaqueContainer
