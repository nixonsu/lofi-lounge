import { useRootStore } from '@root/store/rootStore'

interface Props {
  src?: string
  className?: string
}

const Background = ({ src, className }: Props) => {
  const { uiStore } = useRootStore()

  const { setIsBackgroundImageLoaded } = uiStore
  return (
    <div
      onLoad={() => setIsBackgroundImageLoaded(true)}
      className={`${className} h-full w-full absolute top-0 left-0`}
    >
      {src && (
        <img
          src={src}
          className="h-full w-full object-cover"
          draggable={false}
        />
      )}
    </div>
  )
}

export default Background
