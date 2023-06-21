import { makeAutoObservable } from 'mobx'
import { Scene } from '../types/scene'
import { RootStore } from './rootStore'

export class SceneStore {
  rootStore: RootStore
  scenes: Scene[] = []
  sceneIndex = 0

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
    this.loadScenes()
  }

  get currentScene() {
    return this.scenes[this.sceneIndex]
  }

  setCurrentScene = (sceneId: string) => {
    const scene = this.scenes.find((scene) => scene.id === sceneId) as Scene
    this.sceneIndex = this.scenes.indexOf(scene)
    this.rootStore.uiStore.closeSceneSelector()
  }

  loadScenes = async () => {
    const response = await fetch('/scenes.json')
    const data = await response.json()
    this.scenes = data
  }
}
