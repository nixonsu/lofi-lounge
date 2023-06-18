import { createContext, useContext } from 'react'
import { SceneStore } from './sceneStore'
import { TrackStore } from './trackStore'
import { UIStore } from './uiStore'

export class RootStore {
  sceneStore: SceneStore
  trackStore: TrackStore
  uiStore: UIStore

  constructor() {
    this.sceneStore = new SceneStore(this)
    this.trackStore = new TrackStore(this)
    this.uiStore = new UIStore(this)
  }
}

const RootStoreContext = createContext<RootStore>({} as RootStore)

interface Props {
  children?: React.ReactNode
}

export const RootStoreProvider = ({ children }: Props) => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      {children}
    </RootStoreContext.Provider>
  )
}

export const useRootStore = () => useContext(RootStoreContext)
