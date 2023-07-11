import IconButton from '@components/IconButton'
import { ReactComponent as MoonIcon } from '@components/icons/Moon.svg'
import OpaqueContainer from '@root/components/OpaqueContainer'
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
    <OpaqueContainer className={className}>
      <div className="flex gap-4">
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

export default observer(TopIconBar)
