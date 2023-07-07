import IconButton from '@components/IconButton'
import { ReactComponent as PlayIcon } from '@components/icons/Play.svg'
import { ReactComponent as NextIcon } from '@components/icons/Next.svg'
import { ReactComponent as PauseIcon } from 'pixelarticons/svg/pause.svg'
import { ReactComponent as ShuffleIcon } from 'pixelarticons/svg/shuffle.svg'
import { ReactComponent as RadioIcon } from 'pixelarticons/svg/radio-signal.svg'
import Slider from '@components/Slider'
import { usePlayer } from '@hooks/usePlayer'
import ReactPlayer from 'react-player'
import OpaqueContainer from '@components/OpaqueContainer'
import LoadingIcon from '@components/LoadingIcon'
import { useRootStore } from '@store/rootStore'
import { observer } from 'mobx-react'

const Radio = () => {
  const { trackStore, uiStore } = useRootStore()

  const { currentTrack } = trackStore

  const { openTrackSelector } = uiStore

  const { volume, isPlaying, isLoading, setIsLoading, togglePlay, setVolume } =
    usePlayer()

  return trackStore.tracks.length > 0 ? (
    <OpaqueContainer className="w-3/4 min-w-fit">
      <div className="flex flex-col items-start text-white self-stretch gap-3">
        <p
          className="animate-flicker cursor-pointer"
          onClick={openTrackSelector}
        >
          {currentTrack.title}
        </p>

        <div className="flex items-center gap-4 w-full">
          {isPlaying ? (
            <IconButton onClick={togglePlay} icon={<PauseIcon />} />
          ) : (
            <IconButton onClick={togglePlay} icon={<PlayIcon />} />
          )}
          <IconButton
            onClick={trackStore.previousTrack}
            icon={<NextIcon className="rotate-180" />}
          />
          <IconButton onClick={trackStore.nextTrack} icon={<NextIcon />} />
          <IconButton
            onClick={trackStore.shuffleTrack}
            icon={<ShuffleIcon />}
          />
          <Slider
            value={volume}
            handleChange={(e) => setVolume(parseFloat(e.target.value))}
          />
          <IconButton onClick={openTrackSelector} icon={<RadioIcon />} />
          <div className="w-8">{isLoading && <LoadingIcon />}</div>
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
