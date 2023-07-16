import FadeAnimation from '@components/animations/FadeAnimation'
import FadeAnimationHidden from '@components/animations/FadeAnimationHidden'
import { ReactComponent as MoonIcon } from '@components/icons/Moon.svg'
import Radio from '@feature/Radio'
import SceneSelector from '@feature/SceneSelector'
import SoundPlayerCollection from '@feature/SoundPlayerCollection'
import ThemeSelector from '@feature/ThemeSelector'
import Timer from '@feature/Timer'
import TrackSelector from '@feature/TrackSelector'
import FullScreenContainer from '@root/components/FullScreenContainer'
import IconButton from '@root/components/IconButton'
import OpaqueContainer from '@root/components/OpaqueContainer'
import ScaleAnimation from '@root/components/animations/ScaleAnimation'
import { DONATION_URL } from '@root/constants/links'
import IconBar from '@root/feature/IconBar'
import { useRootStore } from '@store/rootStore'
import { observer } from 'mobx-react'
import { ReactComponent as CoffeeIcon } from 'pixelarticons/svg/coffee.svg'
import { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

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
    isBackgroundImageLoaded,
    setIsBackgroundImageLoaded,
    toggleIsBackgroundDim,
  } = uiStore

  useEffect(() => {
    document.body.className = `theme-${theme}`
  }, [theme])

  return sceneStore.scenes.length > 0 ? (
    <>
      <FadeAnimationHidden isVisible={!isBackgroundImageLoaded}>
        <FullScreenContainer className={`z-10 bg-black`}>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <Typewriter
              words={['welcome to lofi lounge']}
              typeSpeed={50}
              cursorBlinking={true}
              cursor={true}
              cursorStyle={'▌'}
            />
          </div>
        </FullScreenContainer>
      </FadeAnimationHidden>

      <div
        className={`${
          isBackgroundImageLoaded ? 'visible' : 'hidden'
        } h-full w-full p-4 font-primary text-white`}
      >
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 tablet:grid-cols-1">
          <div>
            <Radio />
          </div>

          <div className="flex items-start justify-end tablet:hidden gap-4">
            <OpaqueContainer className="pt-3 pb-3">
              <div className="flex gap-4">
                <IconButton
                  icon={<MoonIcon />}
                  onClick={toggleIsBackgroundDim}
                  isEnabled={!isBackgroundDim}
                />
              </div>
            </OpaqueContainer>
          </div>

          <div className="flex flex-col-reverse items-start gap-4 tablet:items-center">
            <IconBar className="pt-3 pb-3" />

            <FadeAnimationHidden
              isVisible={isSoundPlayerCollectionOpen}
              className="absolute bottom-24 h-1/2"
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

          <div className="flex justify-end items-end tablet:hidden">
            <ScaleAnimation scaleFactor={1.05}>
              <OpaqueContainer
                className="cursor-pointer pb-2 pt-2"
                onClick={() => window.open(DONATION_URL, '_blank')}
              >
                <div className="animate-flicker flex gap-4 items-center">
                  <IconButton className={'pt-1'} icon={<CoffeeIcon />} />
                  <p className="text-xs">Buy me a coffee</p>
                </div>
              </OpaqueContainer>
            </ScaleAnimation>
          </div>
        </div>

        <FadeAnimation isVisible={isSceneSelectorOpen}>
          <SceneSelector onClose={closeSceneSelector} />
        </FadeAnimation>

        <FadeAnimation isVisible={isTrackSelectorOpen}>
          <TrackSelector onClose={closeTrackSelector} />
        </FadeAnimation>

        <FullScreenContainer className="-z-20">
          <img
            src={sceneStore.currentScene.src}
            className="h-full w-full object-cover"
            draggable={false}
            onLoad={() => {
              setTimeout(() => {
                setIsBackgroundImageLoaded(true)
              }, 2000)
            }}
          />
        </FullScreenContainer>

        <FadeAnimation isVisible={isBackgroundDim}>
          <FullScreenContainer className="-z-10 bg-black bg-opacity-50" />
        </FadeAnimation>
      </div>
    </>
  ) : null
}

export default observer(App)
