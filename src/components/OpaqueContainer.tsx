import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const OpaqueContainer = ({ children, className }: Props) => {
  return (
    <div className={`rounded-lg bg-black bg-opacity-50 p-4 ${className}`}>
      {children}
    </div>
  )
}

export default OpaqueContainer
