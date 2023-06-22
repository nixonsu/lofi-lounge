import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  icon: ReactNode
  onClick?: () => void
}

const IconButton = ({ icon, onClick }: Props) => {
  return (
    <motion.button
      className="h-6 w-6"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.button>
  )
}

export default IconButton
