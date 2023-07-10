import IconButton from '@components/IconButton'
import { ReactComponent as MoonIcon } from '@components/icons/Moon.svg'
import IconBar from '@root/components/IconBar'
import { useRootStore } from '@store/rootStore'
import { observer } from 'mobx-react'
import { ReactComponent as FullscreenIcon } from 'pixelarticons/svg/scale.svg'

interface Props {
  className?: string
}

const TopIconBar = ({ className }: Props) => {
  const { uiStore } = useRootStore()

  const { toggleIsBackgroundDim, isBackgroundDim, toggleFullscreen } = uiStore

  return (
    <IconBar className={className}>
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
