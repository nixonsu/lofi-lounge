import { makeAutoObservable } from 'mobx'
import { Track } from '../types/track'
import { chooseRandomElement } from '../utils/ArrayUtils'
import { createContext, useContext } from 'react'

class TrackStore {
  constructor() {
    makeAutoObservable(this)
  }

  tracks: Track[] = [
    {
      id: crypto.randomUUID(),
      title: 'lofi hip hop radio 📚 - beats to relax/study to',
      host: 'LofiGirl',
      url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl',
    },
    {
      id: crypto.randomUUID(),
      title: 'synthwave radio 🌌 - beats to chill/game to',
      host: 'LofiGirl',
      url: 'https://www.youtube.com/watch?v=MVPTGNGiI-4&ab_channel=LofiGirl',
    },
  ]

  currentTrack: Track = chooseRandomElement(this.tracks)

  setCurrentTrack = (trackId: string) => {
    this.currentTrack = this.tracks.find(
      (track) => track.id === trackId
    ) as Track
  }
}

const TrackContext = createContext<TrackStore>({} as TrackStore)

export const useTrackStore = () => useContext(TrackContext)

interface Props {
  children: React.ReactNode
}

export const TrackStoreProvider = ({ children }: Props) => {
  return (
    <TrackContext.Provider value={new TrackStore()}>
      {children}
    </TrackContext.Provider>
  )
}
