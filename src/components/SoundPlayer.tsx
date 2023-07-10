import IconButton from '@components/IconButton'
import OpaqueContainer from '@components/OpaqueContainer'
import Slider from '@components/Slider'
import { ReactComponent as PlayIcon } from '@components/icons/Play.svg'
import { usePlayer } from '@hooks/usePlayer'
import { ReactComponent as PauseIcon } from 'pixelarticons/svg/pause.svg'
import { ReactNode } from 'react'
import ReactHowler from 'react-howler'

interface Props {
  audioSrc: string
  icon: ReactNode
}

const SoundPlayer = ({ audioSrc, icon }: Props) => {
  const { isPlaying, togglePlay, volume, setVolume } = usePlayer()

  return (
    <OpaqueContainer className="w-52">
      <div className="flex items-center gap-3">
        <IconButton
          icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
          onClick={togglePlay}
        />

        <div className="flex items-center">
          <Slider
            value={volume}
            handleChange={(e) => setVolume(parseFloat(e.target.value))}
            className="mb-1 justify-center"
          />
          <IconButton icon={icon} onClick={togglePlay} isEnabled={isPlaying} />
        </div>

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
