import ScaleAnimation from '@components/animations/ScaleAnimation'
import { ChangeEvent, useState } from 'react'

interface Props {
  className?: string
  value: number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Slider = ({ value, handleChange, className }: Props) => {
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
    <div className={`${className} flex items-center`}>
      {Array.from({ length: 11 }, (_, index) =>
        index < 10 ? (
          <ScaleAnimation key={index} scaleFactor={1.5}>
            <div
              className={`mr-1 h-3 w-1.5 cursor-pointer bg-white ${
                value === 0 ? 'red-drop-shadow' : 'shadow-theme'
              } ${index >= activeIndex && 'opacity-30'}`}
              onClick={() => handleSlideClick(index)}
            />
          </ScaleAnimation>
        ) : (
          <ScaleAnimation key={index} scaleFactor={1.5}>
            <div
              key={index}
              className="mr-1 h-4 w-2 cursor-pointer bg-transparent"
              onClick={() => handleSlideClick(index)}
            />
          </ScaleAnimation>
        )
      )}
    </div>
  )
}

export default Slider
