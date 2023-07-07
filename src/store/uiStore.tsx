import { Color } from '@root/types/color'
import { makeAutoObservable } from 'mobx'

export class UIStore {
  isSceneSelectorOpen = false
  isTrackSelectorOpen = false
  isThemeSelectorOpen = false
  isSoundPlayerCollectionOpen = false
  isTimerOpen = false
  isTimerDone = false
  isBackgroundDim = false
  isFullscreen = false
  theme: Color = 'green'

  constructor() {
    makeAutoObservable(this)
  }

  // Scene Selector
  openSceneSelector = () => {
    this.isSceneSelectorOpen = true
  }

  closeSceneSelector = () => {
    this.isSceneSelectorOpen = false
  }

  // Track Selector
  openTrackSelector = () => {
    this.isTrackSelectorOpen = true
  }

  closeTrackSelector = () => {
    this.isTrackSelectorOpen = false
  }

  // Theme Selector
  closeThemeSelector = () => {
    this.isThemeSelectorOpen = false
  }

  toggleThemeSelector = () => {
    this.closeTimer()
    this.closeSoundPlayerCollection()
    this.isThemeSelectorOpen = !this.isThemeSelectorOpen
  }

  setTheme = (color: Color) => {
    this.theme = color
  }

  // Sound Player Collection
  closeSoundPlayerCollection = () => {
    this.isSoundPlayerCollectionOpen = false
  }

  toggleSoundPlayerCollection = () => {
    this.closeTimer()
    this.closeThemeSelector()
    this.isSoundPlayerCollectionOpen = !this.isSoundPlayerCollectionOpen
  }

  // Timer
  closeTimer = () => {
    this.isTimerOpen = false
  }

  toggleTimer = () => {
    this.closeThemeSelector()
    this.closeSoundPlayerCollection()
    this.isTimerOpen = !this.isTimerOpen
  }

  setIsTimerDone = (value: boolean) => {
    this.isTimerDone = value
  }

  // Background Dimming
  toggleIsBackgroundDim = () => {
    this.isBackgroundDim = !this.isBackgroundDim
  }

  // Fullscreen
  toggleFullscreen = () => {
    this.isFullscreen = !this.isFullscreen
  }
}
