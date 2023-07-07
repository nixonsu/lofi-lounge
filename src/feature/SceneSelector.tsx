import { observer } from 'mobx-react'
import { useRootStore } from '@store/rootStore'
import Card from '@components/Card'
import Modal from '@components/Modal'
import ScaleAnimation from '@components/animations/ScaleAnimation'
interface Props {
  onClose: () => void
}

const SceneSelector = ({ onClose }: Props) => {
  const { sceneStore } = useRootStore()

  return (
    <Modal title={'scene selection'} onClose={onClose}>
      <div className="h-full w-full p-4 grid gap-x-4 gap-y-4 grid-cols-fluid overflow-y-scroll">
        {sceneStore.scenes.map((scene) => (
          <ScaleAnimation key={scene.id} scaleFactor={1.02}>
            <Card
              id={scene.id}
              src={scene.thumbnailUrl}
              text={scene.name}
              handleClick={sceneStore.setCurrentScene}
              isSelected={scene.id === sceneStore.currentScene.id}
            />
          </ScaleAnimation>
        ))}
      </div>
    </Modal>
  )
}

export default observer(SceneSelector)
