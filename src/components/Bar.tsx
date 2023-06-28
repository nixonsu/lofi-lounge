import { useRootStore } from '../store/rootStore'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Moon } from './icons/Moon.svg'

const Bar = () => {
  const { uiStore } = useRootStore()

  const { toggleIsBackgroundDim, isBackgroundDim } = uiStore
  return (
    <OpaqueContainer>
      <div className="flex flex-1 gap-3">
        <IconButton
          icon={<Moon />}
          onClick={toggleIsBackgroundDim}
          isEnabled={!isBackgroundDim}
        />
      </div>
    </OpaqueContainer>
  )
}

export default Bar
