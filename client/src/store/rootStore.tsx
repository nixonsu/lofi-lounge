import { createContext, useContext } from 'react'
import { SceneStore } from './sceneStore'
import { TrackStore } from './trackStore'

export class RootStore {
  sceneStore: SceneStore
  trackStore: TrackStore

  constructor() {
    this.sceneStore = new SceneStore()
    this.trackStore = new TrackStore()
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
