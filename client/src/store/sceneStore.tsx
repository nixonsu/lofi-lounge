import { makeAutoObservable } from 'mobx'
import { Scene } from '../types/scene'
import { chooseRandomElement } from '../utils/ArrayUtils'
import { RootStore } from './rootStore'

export class SceneStore {
  rootStore: RootStore

  scenes: Scene[] = [
    {
      id: crypto.randomUUID(),
      name: 'Temple',
      src: '/gifs/temple.gif',
    },
    {
      id: crypto.randomUUID(),
      name: 'Skyline',
      src: '/gifs/skyline.gif',
    },
    {
      id: crypto.randomUUID(),
      name: 'Lake',
      src: '/gifs/lake.gif',
    },
    {
      id: crypto.randomUUID(),
      name: 'Valley',
      src: '/gifs/valley.gif',
    },
    {
      id: crypto.randomUUID(),
      name: 'City',
      src: '/gifs/city.gif',
    },
    {
      id: crypto.randomUUID(),
      name: 'Ocean',
      src: '/gifs/ocean.gif',
    },
    {
      id: crypto.randomUUID(),
      name: 'Cyberpunk',
      src: '/gifs/cyberpunk.gif',
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
