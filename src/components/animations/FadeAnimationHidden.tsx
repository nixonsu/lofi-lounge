import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  isVisible: boolean
  children?: ReactNode
  className?: string
}

const show = {
  opacity: 1,
  display: 'block',
}

const hide = {
  opacity: 0,
  transitionEnd: {
    display: 'none',
  },
}

const FadeAnimationHidden = ({ isVisible, className, children }: Props) => {
  return (
    <motion.div
      animate={isVisible ? show : hide}
      transition={{ ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeAnimationHidden
