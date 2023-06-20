import { makeAutoObservable, toJS } from 'mobx'
import { Track } from '../types/track'
import { RootStore } from './rootStore'

export class TrackStore {
  rootStore: RootStore

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
  trackIndex = 0

  get currentTrack(): Track {
    return this.tracks[this.trackIndex]
  }

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
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
}
