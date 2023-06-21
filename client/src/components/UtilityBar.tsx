import { observer } from 'mobx-react'
import { useRootStore } from '../store/rootStore'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Playlist } from './icons/Playlist.svg'

const UtilityBar = () => {
  const { uiStore } = useRootStore()

  const { openSceneSelector, toggleSoundControlPanel } = uiStore

  return (
    <OpaqueContainer>
      <div className="flex gap-3">
        <IconButton
          icon={<Playlist className="fill-white" />}
          onClick={openSceneSelector}
        />
        <IconButton
          icon={<Playlist className="fill-white" />}
          onClick={toggleSoundControlPanel}
        />
        <IconButton icon={<Playlist className="fill-white" />} />
      </div>
    </OpaqueContainer>
  )
}

export default observer(UtilityBar)
