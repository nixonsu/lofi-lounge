import Background from './components/Background'
import Bar from './components/Bar'
import Radio from './components/Radio'
import UtilityBar from './components/UtilityBar'
import { observer } from 'mobx-react'
import SceneSelector from './components/SceneSelector'
import { useRootStore } from './store/rootStore'
import TrackSelector from './components/TrackSelector'

function App() {
  const { uiStore, sceneStore } = useRootStore()

  const {
    isSceneSelectorOpen,
    closeSceneSelector,
    isTrackSelectorOpen,
    closeTrackSelector,
  } = uiStore

  return sceneStore.scenes.length > 0 ? (
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

      {isSceneSelectorOpen && <SceneSelector onClose={closeSceneSelector} />}

      {isTrackSelectorOpen && <TrackSelector onClose={closeTrackSelector} />}

      <Background className="-z-20" src={sceneStore.currentScene.src} />
      {/* <Background className="-z-10 bg-black bg-opacity-50" /> */}
    </div>
  ) : null
}

export default observer(App)
