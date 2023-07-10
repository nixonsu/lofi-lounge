import { ReactNode } from 'react'

interface Props {
  className?: string
  children?: ReactNode
}

const ScreenContainer = ({ className, children }: Props) => {
  return (
    <div className={`${className} absolute left-0 top-0 h-full w-full`}>
      {children}
    </div>
  )
}

export default ScreenContainer
