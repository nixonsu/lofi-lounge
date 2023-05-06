import { useRadio } from '@/hooks/useRadio'
import dynamic from 'next/dynamic'
import React from 'react'
import Slider from './Slider'
import { StyledMediaControls, StyledRadio } from '@/styles/Radio.styled'
import IconButton from './IconButton'
import Icon from './Icon'

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
          {isPlaying ? <Icon name="pause" /> : <Icon name="play" />}
        </IconButton>
        <IconButton onClick={prevStream}>
          <Icon
            name="next"
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </IconButton>
        <IconButton onClick={nextStream}>
          <Icon name="next" />
        </IconButton>
        <IconButton onClick={shuffleStream}>
          <Icon name="shuffle" />
        </IconButton>
        <Slider
          handleChange={(e) => setVolume(parseFloat(e.target.value))}
          value={volume}
        />
        <IconButton>
          <Icon name="playlist" />
        </IconButton>
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
