import IconButton from '@components/IconButton'
import { ReactComponent as MoonIcon } from '@components/icons/Moon.svg'
import OpaqueContainer from '@root/components/OpaqueContainer'
import { useRootStore } from '@store/rootStore'
import { observer } from 'mobx-react'

interface Props {
  className?: string
}

const TopIconBar = ({ className }: Props) => {
  const { uiStore } = useRootStore()

  const { toggleIsBackgroundDim, isBackgroundDim } = uiStore

  return (
    <OpaqueContainer className={className}>
      <div className="flex gap-4">
        <IconButton
          icon={<MoonIcon />}
          onClick={toggleIsBackgroundDim}
          isEnabled={!isBackgroundDim}
        />
      </div>
    </OpaqueContainer>
  )
}

export default observer(TopIconBar)
