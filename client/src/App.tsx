import { useState } from 'react'
import Background from './components/Background'
import Bar from './components/Bar'
import Modal from './components/Modal'
import Radio from './components/Radio'
import UtilityBar from './components/UtilityBar'
import { observer } from 'mobx-react'
import { useSceneStore } from './store/sceneStore'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const sceneStore = useSceneStore()

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="font-primary p-4 h-screen w-screen text-white">
      <div className="h-full w-full grid grid-cols-2 grid-rows-3">
        <div>
          <Radio />
        </div>

        <div className="flex justify-end items-start">
          <Bar />
        </div>

        <div className="flex items-center">
          <UtilityBar />
        </div>

        <div></div>
        <div></div>
        <div></div>
      </div>

      <Modal
        title={'Background Selection'}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Background className="-z-20" src={sceneStore.selectedScene.src} />
      {/* <Background className="-z-10 bg-black bg-opacity-50" /> */}
    </div>
  )
}

export default observer(App)
