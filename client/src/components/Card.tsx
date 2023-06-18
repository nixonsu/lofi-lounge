import { useRootStore } from '../store/rootStore'
import { Scene } from '../types/scene'

interface Props {
  id: string
  src: string
  text: string
  handleClick: (id: string) => void
}

const isSelected = (id: string, selectedScene: Scene) => {
  return id === selectedScene.id
}

const Card = ({ id, src, text, handleClick }: Props) => {
  const { sceneStore } = useRootStore()

  return (
    <div
      className={`flex flex-col h-full w-full gap-2 items-center cursor-pointer ${
        isSelected(id, sceneStore.selectedScene) && 'border'
      }`}
      onClick={() => {
        handleClick(id)
      }}
    >
      <img className="h-3/4 w-full object-cover" src={src} />
      <p>{text}</p>
    </div>
  )
}

export default Card
