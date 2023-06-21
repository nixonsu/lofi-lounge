import { makeAutoObservable } from 'mobx'
import { RootStore } from './rootStore'

export class UIStore {
  rootStore: RootStore
  isSceneSelectorOpen = false
  isTrackSelectorOpen = false
  isAmbientSoundPlayerOpen = false

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

  closeAmbientSoundPlayer = () => {
    this.isAmbientSoundPlayerOpen = false
  }

  toggleAmbientSoundPlayer = () => {
    this.isAmbientSoundPlayerOpen = !this.isAmbientSoundPlayerOpen
  }
}
