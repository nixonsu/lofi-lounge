import { makeAutoObservable } from 'mobx'
import { RootStore } from './rootStore'

export class UIStore {
  rootStore: RootStore
  isSceneSelectorOpen = false

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
}
