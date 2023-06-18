import { useSceneStore } from '../store/sceneStore'
import Card from './Card'
import Modal from './Modal'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const SceneSelector = ({ isOpen, onClose }: Props) => {
  const sceneStore = useSceneStore()

  return (
    <Modal title={'Scene selection'} isOpen={isOpen} onClose={onClose}>
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
