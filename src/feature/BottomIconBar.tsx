import { observer } from 'mobx-react'
import { useRootStore } from '@store/rootStore'
import IconButton from '@components/IconButton'
import { ReactComponent as GalleryIcon } from 'pixelarticons/svg/image.svg'
import { ReactComponent as MusicIcon } from 'pixelarticons/svg/music.svg'
import { ReactComponent as ClockIcon } from 'pixelarticons/svg/clock.svg'
import { ReactComponent as PaintIcon } from 'pixelarticons/svg/paint-bucket.svg'
import { ReactComponent as MoonIcon } from '@components/icons/Moon.svg'
import { ReactComponent as FullscreenIcon } from 'pixelarticons/svg/scale.svg'
import IconBar from '@root/components/IconBar'

interface Props {
  className?: string
}

const BottomIconBar = ({ className }: Props) => {
  const { uiStore } = useRootStore()

  const {
    openSceneSelector,
    toggleThemeSelector,
    toggleSoundPlayerCollection,
    toggleTimer,
    isTimerDone,
    toggleIsBackgroundDim,
    isBackgroundDim,
    toggleFullscreen,
  } = uiStore

  return (
    <IconBar className={className}>
      <IconButton icon={<GalleryIcon />} onClick={openSceneSelector} />
      <IconButton icon={<MusicIcon />} onClick={toggleSoundPlayerCollection} />
      <IconButton
        icon={<ClockIcon />}
        onClick={toggleTimer}
        isRedGlow={isTimerDone}
      />
      <IconButton icon={<PaintIcon />} onClick={toggleThemeSelector} />
      <div className="hidden tablet:visible tablet:flex tablet:gap-4">
        <IconButton
          icon={<MoonIcon />}
          onClick={toggleIsBackgroundDim}
          isEnabled={!isBackgroundDim}
        />
        <IconButton icon={<FullscreenIcon />} onClick={toggleFullscreen} />
      </div>
    </IconBar>
  )
}

export default observer(BottomIconBar)
