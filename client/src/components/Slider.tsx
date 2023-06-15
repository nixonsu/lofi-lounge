import { ChangeEvent, useState } from 'react'

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
    <div className="flex">
      {Array.from({ length: 11 }, (_, index) =>
        index < 10 ? (
          <div
            key={index}
            className={`h-4 w-2 mr-1 cursor-pointer bg-white ${
              index >= activeIndex && 'opacity-30'
            }`}
            onClick={() => handleSlideClick(index)}
          />
        ) : (
          <div
            key={index}
            className="h-4 w-2 mr-1 cursor-pointer bg-transparent"
            onClick={() => handleSlideClick(index)}
          />
        )
      )}
    </div>
  )
}

export default Slider
