import { useState } from 'react'
import { Stream } from '../types/stream'

const DEFAULT_VOLUME = 0.5
const DEFAULT_STREAM_INDEX = 0
const DEFAULT_PLAYING = false

const initialStreams: Stream[] = [
  {
    title: 'lofi hip hop radio 📚 - beats to relax/study to',
    host: 'LofiGirl',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl',
  },
  {
    title: 'synthwave radio 🌌 - beats to chill/game to',
    host: 'LofiGirl',
    url: 'https://www.youtube.com/watch?v=MVPTGNGiI-4&ab_channel=LofiGirl',
  },
]

export const useRadio = () => {
  const [volume, setVolume] = useState<number>(DEFAULT_VOLUME)
  const [isPlaying, setIsPlaying] = useState<boolean>(DEFAULT_PLAYING)
  const [streamIndex, setStreamIndex] = useState<number>(DEFAULT_STREAM_INDEX)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [streams, setStreams] = useState<Stream[]>(initialStreams)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextStream = () => {
    streamIndex === streams.length - 1
      ? setStreamIndex(0)
      : setStreamIndex(streamIndex + 1)
  }

  const prevStream = () => {
    streamIndex === 0
      ? setStreamIndex(streams.length - 1)
      : setStreamIndex(streamIndex - 1)
  }

  const getCurrentStream = () => streams[streamIndex]

  const shuffleStream = () => {
    const newStreamIndex = Math.floor(Math.random() * streams.length)
    setStreamIndex(newStreamIndex)
  }

  return {
    volume,
    isPlaying,
    getCurrentStream,
    setVolume,
    togglePlay,
    nextStream,
    prevStream,
    shuffleStream,
  }
}
