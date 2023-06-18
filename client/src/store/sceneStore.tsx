import { makeAutoObservable } from 'mobx'
import { Scene } from '../types/scene'
import { chooseRandomElement } from '../utils/ArrayUtils'

export class SceneStore {
  constructor() {
    makeAutoObservable(this)
  }

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

  setSelectedScene = (sceneId: string) => {
    this.selectedScene = this.scenes.find(
      (scene) => scene.id === sceneId
    ) as Scene
  }
}
