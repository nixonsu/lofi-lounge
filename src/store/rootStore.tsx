import { SceneStore } from '@store/sceneStore'
import { TrackStore } from '@store/trackStore'
import { UIStore } from '@store/uiStore'
import { ReactNode, createContext, useContext } from 'react'

export class RootStore {
  sceneStore: SceneStore
  trackStore: TrackStore
  uiStore: UIStore

  constructor() {
    this.sceneStore = new SceneStore(this)
    this.trackStore = new TrackStore(this)
    this.uiStore = new UIStore()
  }
}

const RootStoreContext = createContext<RootStore>({} as RootStore)

interface Props {
  children?: ReactNode
}

export const RootStoreProvider = ({ children }: Props) => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      {children}
    </RootStoreContext.Provider>
  )
}

export const useRootStore = () => useContext(RootStoreContext)
