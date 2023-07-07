import { useRootStore } from '@store/rootStore'
import IconButton from '@components/IconButton'
import { ReactComponent as MoonIcon } from '@components/icons/Moon.svg'
import { ReactComponent as FullscreenIcon } from 'pixelarticons/svg/scale.svg'
import IconBar from '@root/components/IconBar'
import { observer } from 'mobx-react'

const TopIconBar = () => {
  const { uiStore } = useRootStore()

  const { toggleIsBackgroundDim, isBackgroundDim, toggleFullscreen } = uiStore

  return (
    <IconBar>
      <IconButton
        icon={<MoonIcon />}
        onClick={toggleIsBackgroundDim}
        isEnabled={!isBackgroundDim}
      />
      <IconButton icon={<FullscreenIcon />} onClick={toggleFullscreen} />
    </IconBar>
  )
}

export default observer(TopIconBar)
