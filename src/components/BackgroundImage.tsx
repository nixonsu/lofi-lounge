import ScreenContainer from '@root/components/ScreenContainer'
import { useRootStore } from '@root/store/rootStore'
import { observer } from 'mobx-react'

interface Props {
  src: string
}

const BackgroundImage = ({ src }: Props) => {
  const { uiStore } = useRootStore()

  const { setIsBackgroundImageLoaded } = uiStore

  return (
    <ScreenContainer className="-z-20">
      {src && (
        <img
          src={src}
          className="h-full w-full object-cover"
          draggable={false}
          onLoad={() => {
            setInterval(() => {
              setIsBackgroundImageLoaded(true)
            }, 2000)
          }}
        />
      )}
    </ScreenContainer>
  )
}

export default observer(BackgroundImage)
