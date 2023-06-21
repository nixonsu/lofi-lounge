import { makeAutoObservable } from 'mobx'
import { Track } from '../types/track'
import { RootStore } from './rootStore'

export class TrackStore {
  rootStore: RootStore

  tracks: Track[] = []
  trackIndex = 0

  get currentTrack(): Track {
    return this.tracks[this.trackIndex]
  }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)

    this.loadTracks()
  }

  setCurrentTrack(trackId: string) {
    const track = this.tracks.find((track) => track.id === trackId) as Track
    this.trackIndex = this.tracks.indexOf(track)
  }

  nextTrack = () => {
    this.trackIndex === this.tracks.length - 1
      ? (this.trackIndex = 0)
      : (this.trackIndex += 1)
  }

  previousTrack = () => {
    this.trackIndex === 0
      ? (this.trackIndex = this.tracks.length - 1)
      : (this.trackIndex -= 1)
  }

  shuffleTrack = () => {
    this.trackIndex = Math.floor(Math.random() * this.tracks.length)
  }

  loadTracks = async () => {
    const response = await fetch('/tracks.json')
    const data = await response.json()
    this.tracks = data
  }
}
