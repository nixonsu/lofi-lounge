import {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from 'mobx'
import { Scene } from '../types/scene'
import { createContext, useContext } from 'react'

class SceneStore {
  scenes: Scene[] = [
    {
      id: 'japanese-temple',
      name: 'Japanese Temple',
      src: '/gifs/japanese-temple.gif',
    },
    {
      id: 'city-skyline',
      name: 'City skyline',
      src: '/gifs/city-skyline.gif',
    },
  ]
  constructor() {
    // makeObservable(this, {
    //   scenes: observable,
    //   selectedScene: observable,
    //   setSelectedScene: action,
    // })

    makeAutoObservable(this)
  }

  selectedScene: Scene = this.scenes[0]

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
