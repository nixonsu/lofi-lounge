import { useRootStore } from '../store/rootStore'
import Card from './Card'
import Modal from './Modal'

interface Props {
  onClose: () => void
}

const SceneSelector = ({ onClose }: Props) => {
  const { sceneStore } = useRootStore()

  return (
    <Modal title={'Choose a scene'} onClose={onClose}>
      <div className="h-full w-full grid grid-rows-3  gap-x-4 gap-y-16 grid-cols-fluid">
        {sceneStore.scenes.map((scene) => (
          <Card
            key={scene.id}
            id={scene.id}
            src={scene.src}
            text={scene.name}
            handleClick={sceneStore.setSelectedScene}
          />
        ))}
      </div>
    </Modal>
  )
}

export default SceneSelector
