import { useRootStore } from '../store/rootStore'
import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as MoonIcon } from './icons/Moon.svg'
import { ReactComponent as FullscreenIcon } from 'pixelarticons/svg/scale.svg'

const Bar = () => {
  const { uiStore } = useRootStore()

  const { toggleIsBackgroundDim, isBackgroundDim, toggleFullscreen } = uiStore
  return (
    <OpaqueContainer>
      <div className="flex flex-1 gap-3">
        <IconButton
          icon={<MoonIcon />}
          onClick={toggleIsBackgroundDim}
          isEnabled={!isBackgroundDim}
        />
        <IconButton icon={<FullscreenIcon />} onClick={toggleFullscreen} />
      </div>
    </OpaqueContainer>
  )
}

export default Bar
