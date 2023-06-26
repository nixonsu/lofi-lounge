import { observer } from 'mobx-react'
import { useRootStore } from '../store/rootStore'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Playlist } from './icons/Playlist.svg'

const UtilityBar = () => {
  const { uiStore } = useRootStore()

  const { openSceneSelector, toggleSoundControlPanel, toggleTimer } = uiStore

  return (
    <OpaqueContainer>
      <div className="flex gap-3">
        <IconButton
          icon={<Playlist className="fill-white green-drop-shadow" />}
          onClick={openSceneSelector}
        />
        <IconButton
          icon={<Playlist className="fill-white green-drop-shadow" />}
          onClick={toggleSoundControlPanel}
        />
        <IconButton
          icon={<Playlist className="fill-white green-drop-shadow" />}
          onClick={toggleTimer}
        />
      </div>
    </OpaqueContainer>
  )
}

export default observer(UtilityBar)
