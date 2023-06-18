import { makeAutoObservable } from 'mobx'
import { Scene } from '../types/scene'
import { chooseRandomElement } from '../utils/ArrayUtils'
import { RootStore } from './rootStore'

export class SceneStore {
  rootStore: RootStore

  scenes: Scene[] = [
    {
      id: crypto.randomUUID(),
      name: 'Japanese Temple',
      src: '/gifs/japanese-temple.gif',
    },
    {
      id: crypto.randomUUID(),
      name: 'City skyline',
      src: '/gifs/city-skyline.gif',
    },
  ]

  selectedScene: Scene = chooseRandomElement(this.scenes)

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  setSelectedScene = (sceneId: string) => {
    this.selectedScene = this.scenes.find(
      (scene) => scene.id === sceneId
    ) as Scene

    this.rootStore.uiStore.closeSceneSelector()
  }
}
