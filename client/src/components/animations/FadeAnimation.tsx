import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children?: ReactNode
}

const FadeAnimation = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default FadeAnimation
