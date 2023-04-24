import React, { ChangeEvent } from 'react'
import styles from '@/styles/Slider.module.css'

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
    <div
      key={i}
      className={`${styles.neonTick} 
      ${i < value * 10 ? styles.active : ''} 
      ${i === 10 ? styles.invisible : ''}`}
      onClick={() => handleTickClick(i)}
    />
  ))

  return (
    <div className={`${styles.neonSliderContainer}`}>
      <div className={styles.neonTickContainer}>{ticks}</div>
    </div>
  )
}

export default Slider
