import { toJS } from 'mobx'
import { useSceneStore } from '../store/sceneStore'
import Card from './Card'
import IconButton from './IconButton'
import { ReactComponent as Cross } from './icons/Cross.svg'
import { observer } from 'mobx-react'

interface ModalProps {
  title?: string
  isOpen?: boolean
  onClose?: () => void
}

const Modal = ({ title, isOpen, onClose }: ModalProps) => {
  const sceneStore = useSceneStore()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex flex-col p-4 bg-black opacity-80 gap-5">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <IconButton icon={<Cross className="fill-white" />} onClick={onClose} />
      </div>

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
    </div>
  )
}

export default observer(Modal)
