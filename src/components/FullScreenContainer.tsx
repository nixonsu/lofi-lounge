import { ReactNode } from 'react'

interface Props {
  className?: string
  children?: ReactNode
}

const FullScreenContainer = ({ className, children }: Props) => {
  return (
    <div className={`${className} absolute left-0 top-0 h-full w-full`}>
      {children}
    </div>
  )
}

export default FullScreenContainer
