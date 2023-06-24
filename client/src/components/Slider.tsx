import { ChangeEvent, useState } from 'react'
import ScaleAnimation from './animations/ScaleAnimation'

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
          <ScaleAnimation scaleFactor={1.5}>
            <div
              key={index}
              className={`h-3 w-1.5 mr-1 cursor-pointer bg-white ${
                value === 0 ? 'red-drop-shadow' : 'green-drop-shadow'
              } ${index >= activeIndex && 'opacity-30'}`}
              onClick={() => handleSlideClick(index)}
            />
          </ScaleAnimation>
        ) : (
          <ScaleAnimation scaleFactor={1.5}>
            <div
              key={index}
              className="h-4 w-2 mr-1 cursor-pointer bg-transparent"
              onClick={() => handleSlideClick(index)}
            />
          </ScaleAnimation>
        )
      )}
    </div>
  )
}

export default Slider
