import { observer } from 'mobx-react'
import { useRootStore } from '@store/rootStore'
import IconButton from '@components/IconButton'
import { ReactComponent as GalleryIcon } from 'pixelarticons/svg/image.svg'
import { ReactComponent as MusicIcon } from 'pixelarticons/svg/music.svg'
import { ReactComponent as ClockIcon } from 'pixelarticons/svg/clock.svg'
import { ReactComponent as PaintIcon } from 'pixelarticons/svg/paint-bucket.svg'
import IconBar from '@root/components/IconBar'

const BottomIconBar = () => {
  const { uiStore } = useRootStore()

  const {
    openSceneSelector,
    toggleThemeSelector,
    toggleSoundPlayerCollection,
    toggleTimer,
    isTimerDone,
  } = uiStore

  return (
    <IconBar>
      <IconButton icon={<GalleryIcon />} onClick={openSceneSelector} />
      <IconButton icon={<MusicIcon />} onClick={toggleSoundPlayerCollection} />
      <IconButton
        icon={<ClockIcon />}
        onClick={toggleTimer}
        isRedGlow={isTimerDone}
      />
      <IconButton icon={<PaintIcon />} onClick={toggleThemeSelector} />
    </IconBar>
  )
}

export default observer(BottomIconBar)
