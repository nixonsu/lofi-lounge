import { ReactNode } from 'react'
import { usePlayer } from '../hooks/usePlayer'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import Slider from './Slider'
import ReactHowler from 'react-howler'

interface Props {
  audioSrc: string
  icon: ReactNode
}

const SoundPlayer = ({ audioSrc, icon }: Props) => {
  const { isPlaying, togglePlay, volume, setVolume } = usePlayer()

  return (
    <OpaqueContainer className="w-48">
      <div className="flex items-center justify-between">
        <IconButton icon={icon} onClick={togglePlay} isEnabled={isPlaying} />
        <Slider
          value={volume}
          handleChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <div className="hidden">
          <ReactHowler
            src={audioSrc}
            playing={isPlaying}
            volume={volume}
            loop={true}
          />
        </div>
      </div>
    </OpaqueContainer>
  )
}

export default SoundPlayer
