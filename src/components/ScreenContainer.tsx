import { ReactNode } from 'react'

interface Props {
  className?: string
  children?: ReactNode
}

const ScreenContainer = ({ className, children }: Props) => {
  return (
    <div className={`${className} h-full w-full absolute top-0 left-0`}>
      {children}
    </div>
  )
}

export default ScreenContainer
