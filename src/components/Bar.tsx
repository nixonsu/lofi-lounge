import { useRootStore } from '../store/rootStore'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Fullscreen } from './icons/Logout.svg'

const Bar = () => {
  const { uiStore } = useRootStore()

  const { toggleIsBackgroundDim } = uiStore
  return (
    <OpaqueContainer>
      <div className="flex flex-1 gap-3">
        <IconButton
          icon={<Fullscreen className="fill-white green-drop-shadow" />}
          onClick={toggleIsBackgroundDim}
        />
      </div>
    </OpaqueContainer>
  )
}

export default Bar
