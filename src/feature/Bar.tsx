import { useRootStore } from '@store/rootStore'
import IconButton from '@components/IconButton'
import OpaqueContainer from '@components/OpaqueContainer'
import { ReactComponent as MoonIcon } from '@components/icons/Moon.svg'
import { ReactComponent as FullscreenIcon } from 'pixelarticons/svg/scale.svg'

const Bar = () => {
  const { uiStore } = useRootStore()

  const { toggleIsBackgroundDim, isBackgroundDim, toggleFullscreen } = uiStore

  return (
    <OpaqueContainer>
      <div className="flex gap-3">
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
