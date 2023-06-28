import { observer } from 'mobx-react'
import { useRootStore } from '../store/rootStore'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Playlist } from './icons/Playlist.svg'

const UtilityBar = () => {
  const { uiStore } = useRootStore()

  const {
    openSceneSelector,
    toggleSoundControlPanel,
    toggleTimer,
    isTimerDone,
  } = uiStore

  return (
    <OpaqueContainer>
      <div className="flex gap-3">
        <IconButton icon={<Playlist />} onClick={openSceneSelector} />
        <IconButton icon={<Playlist />} onClick={toggleSoundControlPanel} />
        <IconButton
          icon={<Playlist />}
          onClick={toggleTimer}
          isRedGlow={isTimerDone}
        />
      </div>
    </OpaqueContainer>
  )
}

export default observer(UtilityBar)
