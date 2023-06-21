import { useEffect, useState } from 'react'
import { usePlayer } from '../hooks/usePlayer'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import Slider from './Slider'

interface Props {
  audioSrc: string
  icon: React.ReactNode
}

const AmbientCard = ({ audioSrc, icon }: Props) => {
  const { isPlaying, togglePlay, volume, setVolume } = usePlayer()

  const [audio] = useState(new Audio(audioSrc))

  audio.loop = true

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause()
  }, [audio, isPlaying])

  useEffect(() => {
    audio.volume = volume
  }, [audio, volume])

  return (
    <OpaqueContainer>
      <div className="flex items-center w-full justify-between">
        <IconButton icon={icon} onClick={togglePlay} />
        <Slider
          value={volume}
          handleChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </OpaqueContainer>
  )
}

export default AmbientCard
