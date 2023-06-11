import IconButton from './IconButton'
import { ReactComponent as Play } from './icons/Play.svg'
import { ReactComponent as Pause } from './icons/Pause.svg'
import { ReactComponent as Next } from './icons/Next.svg'
import { ReactComponent as Shuffle } from './icons/Shuffle.svg'
import { ReactComponent as Playlist } from './icons/Playlist.svg'
import Slider from './Slider'
import { useRadio } from '../hooks/useRadio'
import ReactPlayer from 'react-player'

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
    <div className="flex flex-col items-start w-1/4 text-white">
      <p>{title}</p>

      <div className="flex items-center justify-center">
        {isPlaying ? (
          <IconButton onClick={togglePlay} icon={<Pause />} />
        ) : (
          <IconButton onClick={togglePlay} icon={<Play />} />
        )}
        <IconButton
          onClick={prevStream}
          icon={<Next className="rotate-180" />}
        />
        <IconButton onClick={nextStream} icon={<Next />} />
        <IconButton onClick={shuffleStream} icon={<Shuffle />} />
        <Slider
          value={volume}
          handleChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <IconButton icon={<Playlist />} />
      </div>

      <ReactPlayer
        className="hidden"
        url={url}
        playing={isPlaying}
        volume={volume}
      />
    </div>
  )
}

export default Radio
