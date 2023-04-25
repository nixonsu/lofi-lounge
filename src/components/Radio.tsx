import { useRadio } from '@/hooks/useRadio'
import dynamic from 'next/dynamic'
import React from 'react'
import Slider from './Slider'
import { StyledMediaControls, StyledRadio } from '@/styles/Radio.styled'
import IconButton from './IconButton'

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
    <StyledRadio>
      <StyledMediaControls>
        <IconButton onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </IconButton>
        <IconButton onClick={nextStream}>Next</IconButton>
        <IconButton onClick={prevStream}>Prev</IconButton>
        <IconButton onClick={shuffleStream}>Shuffle</IconButton>
        <Slider
          handleChange={(e) => setVolume(parseFloat(e.target.value))}
          value={volume}
        />
      </StyledMediaControls>

      <p>{title}</p>

      <ReactPlayer
        style={{ display: 'none' }}
        url={url}
        playing={isPlaying}
        volume={volume}
      />
    </StyledRadio>
  )
}

export default Radio
