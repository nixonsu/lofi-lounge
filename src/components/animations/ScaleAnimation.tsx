import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
  scaleFactor?: number
}

const ScaleAnimation = ({ children, className, scaleFactor }: Props) => {
  return (
    <motion.div className={className} whileHover={{ scale: scaleFactor }}>
      {children}
    </motion.div>
  )
}

export default ScaleAnimation
