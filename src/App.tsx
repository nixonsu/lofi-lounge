import Background from '@components/Background'
import TopIconBar from '@root/feature/TopIconBar'
import Radio from '@feature/Radio'
import BottomIconBar from '@root/feature/BottomIconBar'
import { observer } from 'mobx-react'
import SceneSelector from '@feature/SceneSelector'
import { useRootStore } from '@store/rootStore'
import TrackSelector from '@feature/TrackSelector'
import SoundPlayerCollection from '@feature/SoundPlayerCollection'
import FadeAnimation from '@components/animations/FadeAnimation'
import { useEffect } from 'react'
import Timer from '@feature/Timer'
import FadeAnimationHidden from '@components/animations/FadeAnimationHidden'
import ThemeSelector from '@feature/ThemeSelector'

function App() {
  const { uiStore, sceneStore } = useRootStore()

  const {
    isSceneSelectorOpen,
    closeSceneSelector,
    isTrackSelectorOpen,
    closeTrackSelector,
    isThemeSelectorOpen,
    closeThemeSelector,
    isSoundPlayerCollectionOpen,
    closeSoundPlayerCollection,
    isTimerOpen,
    closeTimer,
    isBackgroundDim,
    theme,
    setTheme,
    isFullscreen,
  } = uiStore

  useEffect(() => {
    document.body.className = `theme-${theme}`
  }, [theme])

  useEffect(() => {
    !isFullscreen
      ? document.exitFullscreen()
      : document.body.requestFullscreen()
  }, [isFullscreen])

  return sceneStore.scenes.length > 0 ? (
    <div className="font-primary p-4 h-screen w-screen text-white">
      <div className="h-full w-full grid grid-cols-2 grid-rows-2 tablet:grid-cols-1">
        <div>
          <Radio />
        </div>

        <div className="flex justify-end items-start">
          <TopIconBar className="tablet:hidden" />
        </div>

        <div className="flex flex-col-reverse items-start tablet:items-center gap-4">
          <BottomIconBar />

          <FadeAnimationHidden
            isVisible={isSoundPlayerCollectionOpen}
            className="h-1/2 absolute bottom-24"
          >
            <SoundPlayerCollection onClose={closeSoundPlayerCollection} />
          </FadeAnimationHidden>

          <FadeAnimationHidden
            isVisible={isThemeSelectorOpen}
            className="absolute bottom-24"
          >
            <ThemeSelector
              handleSelect={setTheme}
              currentTheme={theme}
              onClose={closeThemeSelector}
            />
          </FadeAnimationHidden>

          <FadeAnimationHidden isVisible={isTimerOpen}>
            <Timer onClose={closeTimer} />
          </FadeAnimationHidden>
        </div>
      </div>

      <FadeAnimation isVisible={isSceneSelectorOpen}>
        <SceneSelector onClose={closeSceneSelector} />
      </FadeAnimation>

      <FadeAnimation isVisible={isTrackSelectorOpen}>
        <TrackSelector onClose={closeTrackSelector} />
      </FadeAnimation>

      <Background className="-z-20" src={sceneStore.currentScene.src} />
      <FadeAnimation isVisible={isBackgroundDim}>
        <Background className="-z-10 bg-black bg-opacity-50" />
      </FadeAnimation>
    </div>
  ) : null
}

export default observer(App)
