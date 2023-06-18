import IconButton from './IconButton'
import { ReactComponent as Play } from './icons/Play.svg'
import { ReactComponent as Pause } from './icons/Pause.svg'
import { ReactComponent as Next } from './icons/Next.svg'
import { ReactComponent as Shuffle } from './icons/Shuffle.svg'
import { ReactComponent as Playlist } from './icons/Playlist.svg'
import Slider from './Slider'
import { useRadio } from '../hooks/useRadio'
import ReactPlayer from 'react-player'
import OpaqueContainer from './OpaqueContainer'

const Radio = () => {
  const {
    volume,
    isPlaying,
    togglePlay,
    setVolume,
    nextTrack,
    prevTrack,
    getCurrentTrack,
    shuffleTrack,
  } = useRadio()

  const { title, url } = getCurrentTrack()

  return (
    <OpaqueContainer>
      <div className="flex flex-col items-start w-1/4 text-white flex-1 gap-3">
        <p>{title}</p>

        <div className="flex items-center justify-center gap-3">
          {isPlaying ? (
            <IconButton
              onClick={togglePlay}
              icon={<Pause className="fill-white" />}
            />
          ) : (
            <IconButton
              onClick={togglePlay}
              icon={<Play className="fill-white" />}
            />
          )}
          <IconButton
            onClick={prevTrack}
            icon={<Next className="fill-white rotate-180" />}
          />
          <IconButton
            onClick={nextTrack}
            icon={<Next className="fill-white" />}
          />
          <IconButton
            onClick={shuffleTrack}
            icon={<Shuffle fill="white" className="fill-white" />}
          />
          <Slider
            value={volume}
            handleChange={(e) => setVolume(parseFloat(e.target.value))}
          />
          <IconButton icon={<Playlist className="fill-white" />} />
        </div>

        <ReactPlayer
          className="hidden"
          url={url}
          playing={isPlaying}
          volume={volume}
        />
      </div>
    </OpaqueContainer>
  )
}

export default Radio
