import { useRadio } from '@/hooks/useRadio'
import dynamic from 'next/dynamic'
import React from 'react'
import Slider from './Slider'
import { StyledMediaControls, StyledRadio } from '@/styles/Radio.styled'
import IconButton from './IconButton'
import playIcon from '../../public/svgs/Play.svg'
import pauseIcon from '../../public/svgs/Pause.svg'
import nextIcon from '../../public/svgs/Next.svg'
import shuffleIcon from '../../public/svgs/Shuffle.svg'
import Image from 'next/image'

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
          {isPlaying ? (
            <Image src={pauseIcon} height={30} width={30} alt="Pause icon" />
          ) : (
            <Image src={playIcon} height={30} width={30} alt="Play icon" />
          )}
        </IconButton>
        <IconButton onClick={prevStream}>
          <Image
            style={{
              transform: 'rotate(180deg)',
            }}
            src={nextIcon}
            height={30}
            width={30}
            alt="Previous icon"
          />
        </IconButton>
        <IconButton onClick={nextStream}>
          <Image src={nextIcon} height={30} width={30} alt="Next icon" />
        </IconButton>
        <IconButton onClick={shuffleStream}>
          <Image src={shuffleIcon} height={35} width={35} alt="Shuffle icon" />
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
