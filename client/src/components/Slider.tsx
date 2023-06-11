import { useState } from 'react'

interface Props {
  value: number
}

const Slider = ({ value }: Props) => {
  const [activeIndex, setActiveIndex] = useState(value)

  const handleSlideClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="flex">
      {Array.from({ length: 11 }, (_, index) => (
        <div
          key={index}
          className={`h-4 w-2 mr-1 cursor-pointer ${
            index < activeIndex ? 'bg-black' : 'bg-black opacity-30'
          } ${index === 10 && 'bg-transparent'}`}
          onClick={() => handleSlideClick(index)}
        ></div>
      ))}
    </div>
  )
}

export default Slider
