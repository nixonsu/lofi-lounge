import IconButton from './IconButton'
import { ReactComponent as Play } from './icons/Play.svg'
import { ReactComponent as Pause } from './icons/Pause.svg'
import { ReactComponent as Next } from './icons/Next.svg'
import { ReactComponent as Shuffle } from './icons/Shuffle.svg'
import { ReactComponent as Playlist } from './icons/Playlist.svg'
import Slider from './Slider'
import { usePlayer } from '../hooks/usePlayer'
import ReactPlayer from 'react-player'
import OpaqueContainer from './OpaqueContainer'
import LoadingIcon from './LoadingIcon'
import { useRootStore } from '../store/rootStore'
import { observer } from 'mobx-react'

const Radio = () => {
  const { trackStore, uiStore } = useRootStore()

  const { currentTrack } = trackStore

  const { volume, isPlaying, isLoading, setIsLoading, togglePlay, setVolume } =
    usePlayer()

  return trackStore.tracks.length > 0 ? (
    <OpaqueContainer>
      <div className="flex flex-col items-start w-1/4 text-white flex-1 gap-3">
        <p>{currentTrack.title}</p>

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
            onClick={trackStore.previousTrack}
            icon={<Next className="fill-white rotate-180" />}
          />
          <IconButton
            onClick={trackStore.nextTrack}
            icon={<Next className="fill-white" />}
          />
          <IconButton
            onClick={trackStore.shuffleTrack}
            icon={<Shuffle fill="white" className="fill-white" />}
          />
          <Slider
            value={volume}
            handleChange={(e) => setVolume(parseFloat(e.target.value))}
          />
          <IconButton
            onClick={uiStore.openTrackSelector}
            icon={<Playlist className="fill-white" />}
          />
          {isLoading && <LoadingIcon />}
        </div>

        <ReactPlayer
          className="hidden"
          url={currentTrack.url}
          playing={isPlaying}
          volume={volume}
          onBuffer={() => setIsLoading(true)}
          onBufferEnd={() => setIsLoading(false)}
        />
      </div>
    </OpaqueContainer>
  ) : null
}

export default observer(Radio)
