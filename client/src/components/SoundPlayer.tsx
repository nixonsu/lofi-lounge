import { usePlayer } from '../hooks/usePlayer'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import Slider from './Slider'
import ReactHowler from 'react-howler'

interface Props {
  audioSrc: string
  icon: React.ReactNode
}

const SoundPlayer = ({ audioSrc, icon }: Props) => {
  const { isPlaying, togglePlay, volume, setVolume } = usePlayer()

  return (
    <OpaqueContainer className="w-full">
      <div className="flex items-center justify-between">
        <IconButton icon={icon} onClick={togglePlay} />
        <Slider
          value={volume}
          handleChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <ReactHowler
          src={audioSrc}
          playing={isPlaying}
          volume={volume}
          loop={true}
        />
      </div>
    </OpaqueContainer>
  )
}

export default SoundPlayer
