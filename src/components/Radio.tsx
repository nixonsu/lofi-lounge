import { useRadio } from '@/hooks/useRadio'
import dynamic from 'next/dynamic'
import React from 'react'
import Button from './Button'
import styles from '@/styles/Radio.module.css'
import Slider from './Slider'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const Radio = () => {
  const {
    volume,
    isPlaying,
    togglePlay,
    setVolume,
    nextStream,
    prevStream,
    getCurrentStream,
    shuffleStream,
  } = useRadio()

  const { title, url } = getCurrentStream()

  return (
    <div className={`${styles.radio}`}>
      <div className={`${styles.mediaControls}`}>
        <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
        <Button onClick={nextStream}>Next</Button>
        <Button onClick={prevStream}>Prev</Button>
        <Button onClick={shuffleStream}>Shuffle</Button>
        <Slider
          handleChange={(e) => setVolume(parseFloat(e.target.value))}
          value={volume}
        />
      </div>

      <p>{title}</p>

      <ReactPlayer
        style={{ display: 'none' }}
        url={url}
        playing={isPlaying}
        volume={volume}
      />
    </div>
  )
}

export default Radio
