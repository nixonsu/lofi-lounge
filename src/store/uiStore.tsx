import { Color } from '@root/models/color'
import { LOCAL_STORAGE_KEYS } from '@root/store/constants'
import {
  resolveInvalidBoolean,
  resolveInvalidColor,
} from '@root/utils/defaultResolvers'
import { makeAutoObservable, reaction } from 'mobx'

export class UIStore {
  isSceneSelectorOpen = false
  isTrackSelectorOpen = false
  isThemeSelectorOpen = false
  isSoundPlayerCollectionOpen = false
  isTimerOpen = false
  isTimerDone = false
  isBackgroundDim = resolveInvalidBoolean(
    localStorage.getItem(LOCAL_STORAGE_KEYS.isBackgroundDim),
    false
  )
  isFullscreen = false
  isBackgroundImageLoaded = false
  theme: Color = resolveInvalidColor(
    localStorage.getItem(LOCAL_STORAGE_KEYS.theme),
    'green'
  )

  constructor() {
    makeAutoObservable(this)
    this.setupSavingThemeToLocalStorageReaction()
    this.setupSavingIsBackgroundDimToLocalStorageReaction()
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

  // Background image
  setIsBackgroundImageLoaded = (value: boolean) => {
    this.isBackgroundImageLoaded = value
  }

  private setupSavingThemeToLocalStorageReaction() {
    reaction(
      () => this.theme,
      (theme: Color) => localStorage.setItem(LOCAL_STORAGE_KEYS.theme, theme)
    )
  }

  private setupSavingIsBackgroundDimToLocalStorageReaction() {
    reaction(
      () => this.isBackgroundDim,
      (isBackgroundDim: boolean) =>
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.isBackgroundDim,
          isBackgroundDim.toString()
        )
    )
  }
}
