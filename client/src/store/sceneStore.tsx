import { makeAutoObservable } from 'mobx'
import { Scene } from '../types/scene'
import { createContext, useContext } from 'react'
import { chooseRandomElement } from '../utils/ArrayUtils'

class SceneStore {
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

const SceneContext = createContext<SceneStore>({} as SceneStore)

export const useSceneStore = () => useContext(SceneContext)

interface Props {
  children: React.ReactNode
}

export const SceneStoreProvider = ({ children }: Props) => {
  return (
    <SceneContext.Provider value={new SceneStore()}>
      {children}
    </SceneContext.Provider>
  )
}