import Background from './components/Background'
import Bar from './components/Bar'
import Radio from './components/Radio'
import UtilityBar from './components/UtilityBar'
import { observer } from 'mobx-react'
import SceneSelector from './components/SceneSelector'
import { useRootStore } from './store/rootStore'
import TrackSelector from './components/TrackSelector'
import SoundControlPanel from './components/SoundControlPanel'
import FadeAnimation from './components/animations/FadeAnimation'
import { useEffect } from 'react'
import Timer from './components/Timer'

function App() {
  const { uiStore, sceneStore } = useRootStore()

  const {
    isSceneSelectorOpen,
    closeSceneSelector,
    isTrackSelectorOpen,
    closeTrackSelector,
    isSoundControlPanelOpen,
    closeSoundControlPanel,
    isTimerOpen,
  } = uiStore

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        closeSceneSelector()
        closeTrackSelector()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [closeSceneSelector, closeTrackSelector])

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

          <FadeAnimation isVisible={isSoundControlPanelOpen} className="h-full">
            <SoundControlPanel
              className={`${isSoundControlPanelOpen ? '' : 'hidden'}`}
              onClose={closeSoundControlPanel}
            />
          </FadeAnimation>

          <Timer />
        </div>
        <div></div>
      </div>

      <FadeAnimation isVisible={isSceneSelectorOpen}>
        <SceneSelector onClose={closeSceneSelector} />
      </FadeAnimation>

      <FadeAnimation isVisible={isTrackSelectorOpen}>
        <TrackSelector onClose={closeTrackSelector} />
      </FadeAnimation>

      <Background className="-z-20" src={sceneStore.currentScene.src} />
      <Background className="-z-10 bg-black bg-opacity-50" />
    </div>
  ) : null
}

export default observer(App)
