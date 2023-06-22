import { ChangeEvent, useState } from 'react'

import { motion } from 'framer-motion'
interface Props {
  value: number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Slider = ({ value, handleChange }: Props) => {
  const [activeIndex, setActiveIndex] = useState(value * 10)

  const handleSlideClick = (index: number) => {
    setActiveIndex(index)
    const event = {
      target: {
        value: `${index / 10}`,
      },
    }
    handleChange(event as ChangeEvent<HTMLInputElement>)
  }

  return (
    <div className="flex items-center">
      {Array.from({ length: 11 }, (_, index) =>
        index < 10 ? (
          <motion.div
            key={index}
            className={`h-3 w-1.5 mr-1 cursor-pointer bg-white green-drop-shadow ${
              index >= activeIndex && 'opacity-30'
            }`}
            onClick={() => handleSlideClick(index)}
            whileHover={{ scale: 1.5 }}
          />
        ) : (
          <motion.div
            key={index}
            className="h-4 w-2 mr-1 cursor-pointer bg-transparent"
            onClick={() => handleSlideClick(index)}
            whileHover={{ scale: 1.5 }}
          />
        )
      )}
    </div>
  )
}

export default Slider
