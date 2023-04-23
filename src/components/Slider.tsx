import React, { ChangeEvent } from 'react'
import styles from '@/styles/Slider.module.css'

interface Slider {
  value: number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Slider = ({ value, handleChange }: Slider) => {
  return (
    <div className={`${styles.neonSliderContainer}`}>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={value}
        onChange={handleChange}
        className={`${styles.neonSlider}`}
      />
    </div>
  )
}

export default Slider
