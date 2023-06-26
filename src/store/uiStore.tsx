import { makeAutoObservable } from 'mobx'
import { RootStore } from './rootStore'

export class UIStore {
  rootStore: RootStore
  isSceneSelectorOpen = false
  isTrackSelectorOpen = false
  isSoundControlPanelOpen = false
  isTimerOpen = false

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  openSceneSelector = () => {
    this.isSceneSelectorOpen = true
  }

  closeSceneSelector = () => {
    this.isSceneSelectorOpen = false
  }

  openTrackSelector = () => {
    this.isTrackSelectorOpen = true
  }

  closeTrackSelector = () => {
    this.isTrackSelectorOpen = false
  }

  closeSoundControlPanel = () => {
    this.isSoundControlPanelOpen = false
  }

  toggleSoundControlPanel = () => {
    this.isSoundControlPanelOpen = !this.isSoundControlPanelOpen
  }

  closeTimer = () => {
    this.isTimerOpen = false
  }

  toggleTimer = () => {
    this.isTimerOpen = !this.isTimerOpen
  }
}
