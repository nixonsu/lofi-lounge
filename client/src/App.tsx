import { useState } from 'react'
import Background from './components/Background'
import Bar from './components/Bar'
import Radio from './components/Radio'
import UtilityBar from './components/UtilityBar'
import { observer } from 'mobx-react'
import SceneSelector from './components/SceneSelector'
import { useRootStore } from './store/rootStore'

function App() {
  const [isSceneSelectorOpen, setIsSceneSelectorOpen] = useState(true)

  const { sceneStore } = useRootStore()

  const handleCloseSceneSelector = () => {
    setIsSceneSelectorOpen(false)
  }

  const handleOpenSceneSelector = () => {
    setIsSceneSelectorOpen(true)
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

      {isSceneSelectorOpen && (
        <SceneSelector onClose={handleCloseSceneSelector} />
      )}

      <Background className="-z-20" src={sceneStore.selectedScene.src} />
      {/* <Background className="-z-10 bg-black bg-opacity-50" /> */}
    </div>
  )
}

export default observer(App)
