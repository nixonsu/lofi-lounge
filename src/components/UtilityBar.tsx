import { observer } from 'mobx-react'
import { useRootStore } from '../store/rootStore'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as GalleryIcon } from 'pixelarticons/svg/image.svg'
import { ReactComponent as MusicIcon } from 'pixelarticons/svg/music.svg'
import { ReactComponent as ClockIcon } from 'pixelarticons/svg/clock.svg'
import { ReactComponent as PaintIcon } from 'pixelarticons/svg/paint-bucket.svg'

const UtilityBar = () => {
  const { uiStore } = useRootStore()

  const {
    openSceneSelector,
    toggleThemeSelector,
    toggleSoundControlPanel,
    toggleTimer,
    isTimerDone,
  } = uiStore

  return (
    <OpaqueContainer>
      <div className="flex gap-3">
        <IconButton icon={<GalleryIcon />} onClick={openSceneSelector} />
        <IconButton icon={<MusicIcon />} onClick={toggleSoundControlPanel} />
        <IconButton
          icon={<ClockIcon />}
          onClick={toggleTimer}
          isRedGlow={isTimerDone}
        />
        <IconButton icon={<PaintIcon />} onClick={toggleThemeSelector} />
      </div>
    </OpaqueContainer>
  )
}

export default observer(UtilityBar)
