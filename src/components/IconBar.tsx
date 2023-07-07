import OpaqueContainer from '@root/components/OpaqueContainer'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const IconBar = ({ children }: Props) => {
  return (
    <OpaqueContainer>
      <div className="flex gap-4">{children}</div>
    </OpaqueContainer>
  )
}

export default IconBar
