import React, { ChangeEvent } from 'react'
import { StyledSlider, Tick, TickContainer } from '@/styles/Slider.styled'

interface NeonSliderProps {
  value: number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Slider = ({ value, handleChange }: NeonSliderProps) => {
  const handleTickClick = (index: number) => {
    const event = {
      target: {
        value: `${index / 10}`,
      },
    }
    handleChange(event as ChangeEvent<HTMLInputElement>)
  }

  const ticks = Array.from({ length: 11 }, (_, i) => (
    <Tick
      key={i}
      active={i < value * 10}
      invisible={i === 10}
      onClick={() => handleTickClick(i)}
    />
  ))

  return (
    <StyledSlider>
      <TickContainer>{ticks}</TickContainer>
    </StyledSlider>
  )
}

export default Slider
