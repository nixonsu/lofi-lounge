import OpaqueContainer from '@root/components/OpaqueContainer'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

const IconBar = ({ children, className }: Props) => {
  return (
    <OpaqueContainer className={className}>
      <div className="flex gap-4">{children}</div>
    </OpaqueContainer>
  )
}

export default IconBar
