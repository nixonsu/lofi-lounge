import { makeAutoObservable } from 'mobx'
import { RootStore } from './rootStore'

export class UIStore {
  rootStore: RootStore
  isSceneSelectorOpen = false
  isTrackSelectorOpen = false
  isSoundControlPanelOpen = false

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
    console.log(this.isSoundControlPanelOpen)
  }

  toggleSoundControlPanel = () => {
    this.isSoundControlPanelOpen = !this.isSoundControlPanelOpen
  }
}
