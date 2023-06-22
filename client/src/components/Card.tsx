import { motion } from 'framer-motion'
interface Props {
  id: string
  src: string
  text: string
  isSelected: boolean
  handleClick: (id: string) => void
}

const Card = ({ id, src, text, handleClick, isSelected }: Props) => {
  return (
    <motion.div
      className={`flex flex-col h-full w-full p-2 gap-4 items-center cursor-pointer ${
        isSelected && 'green-box-shadow'
      }`}
      onClick={() => {
        handleClick(id)
      }}
      whileHover={{ scale: 1.02 }}
    >
      <img className="h-5/6 w-full object-cover" src={src} />
      <p>{text}</p>
    </motion.div>
  )
}

export default Card
