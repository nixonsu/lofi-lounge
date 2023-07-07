import { makeAutoObservable } from 'mobx'
import { Color } from '../types/color'

export class UIStore {
  isSceneSelectorOpen = false
  isTrackSelectorOpen = false
  isThemeSelectorOpen = false
  isSoundControlPanelOpen = false
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
    this.closeSoundControlPanel()
    this.isThemeSelectorOpen = !this.isThemeSelectorOpen
  }

  setTheme = (color: Color) => {
    this.theme = color
  }

  // Sound Control Panel
  closeSoundControlPanel = () => {
    this.isSoundControlPanelOpen = false
  }

  toggleSoundControlPanel = () => {
    this.closeTimer()
    this.closeThemeSelector()
    this.isSoundControlPanelOpen = !this.isSoundControlPanelOpen
  }

  // Timer
  closeTimer = () => {
    this.isTimerOpen = false
  }

  toggleTimer = () => {
    this.closeThemeSelector()
    this.closeSoundControlPanel()
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
  enterFullscreen = () => {
    this.isFullscreen = true
  }

  exitFullscreen = () => {
    this.isFullscreen = false
  }

  toggleFullscreen = () => {
    this.isFullscreen = !this.isFullscreen
  }
}
