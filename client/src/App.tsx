import Background from './components/Background'
import Bar from './components/Bar'
import Radio from './components/Radio'
import UtilityBar from './components/UtilityBar'
import { observer } from 'mobx-react'
import SceneSelector from './components/SceneSelector'
import { useRootStore } from './store/rootStore'
import TrackSelector from './components/TrackSelector'
import SoundControlPanel from './components/SoundControlPanel'

function App() {
  const { uiStore, sceneStore } = useRootStore()

  const {
    isSceneSelectorOpen,
    closeSceneSelector,
    isTrackSelectorOpen,
    closeTrackSelector,
    isSoundControlPanelOpen,
    closeSoundControlPanel,
  } = uiStore

  const handleOnChange = () => {
    console.log('called')
  }

  return sceneStore.scenes.length > 0 ? (
    <div className="font-primary p-4 h-screen w-screen text-white">
      <div className="h-full w-full grid grid-cols-2 grid-rows-2">
        <div>
          <Radio />
        </div>

        <div className="flex justify-end items-start">
          <Bar />
        </div>

        <div className="flex flex-col-reverse items-start gap-4">
          <UtilityBar />
          <SoundControlPanel
            className={`${isSoundControlPanelOpen ? '' : 'hidden'}`}
            onClose={closeSoundControlPanel}
          />
        </div>
        <div></div>
      </div>

      {isSceneSelectorOpen && <SceneSelector onClose={closeSceneSelector} />}

      {isTrackSelectorOpen && <TrackSelector onClose={closeTrackSelector} />}

      <Background className="-z-20" src={sceneStore.currentScene.src} />
      <Background className="-z-10 bg-black bg-opacity-50" />
    </div>
  ) : null
}

export default observer(App)
