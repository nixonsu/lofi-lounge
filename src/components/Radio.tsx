import { useRadio } from '@/hooks/useRadio'
import dynamic from 'next/dynamic'
import React, { useContext } from 'react'
import Slider from './Slider'
import { StyledMediaControls, StyledRadio } from '@/styles/Radio.styled'
import IconButton from './IconButton'
import PlayIcon from '../../public/svgs/Play.svg'
import PauseIcon from '../../public/svgs/Pause.svg'
import NextIcon from '../../public/svgs/Next.svg'
import ShuffleIcon from '../../public/svgs/Shuffle.svg'
import { ThemeContext } from 'styled-components'
import { Theme } from '@/styles/Themes'

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

  const theme: Theme = useContext(ThemeContext)

  return (
    <StyledRadio>
      <StyledMediaControls>
        <IconButton onClick={togglePlay}>
          {isPlaying ? (
            <PauseIcon
              style={{ filter: `${theme.greenDropShadow}` }}
              height={30}
              width={30}
              fill={theme.text}
            />
          ) : (
            <PlayIcon height={30} width={30} fill={'white'} />
          )}
        </IconButton>
        <IconButton onClick={prevStream}>
          <NextIcon
            style={{
              transform: 'rotate(180deg)',
            }}
            height={30}
            width={30}
            fill={'white'}
          />
        </IconButton>
        <IconButton onClick={nextStream}>
          <NextIcon height={30} width={30} fill={'white'} />
        </IconButton>
        <IconButton onClick={shuffleStream}>
          <ShuffleIcon height={30} width={30} fill={'white'} />
        </IconButton>
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
