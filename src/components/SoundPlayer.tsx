import IconButton from '@components/IconButton'
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
    <div className="w-52 p-4">
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
    </div>
  )
}

export default SoundPlayer
