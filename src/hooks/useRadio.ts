import { useState } from 'react'
import { Stream } from '@/types/stream'

const initialStreams: Stream[] = [
  {
    title: 'lofi hip hop radio 📚 - beats to relax/study to',
    host: 'LofiGirl',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl',
  },
]

export const useRadio = () => {
  const [volume, setVolume] = useState<number>(0.5)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [streamIndex, setStreamIndex] = useState<number>(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [streams, setStreams] = useState<Stream[]>(initialStreams)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const nextStream = () => {
    setStreamIndex(streamIndex + 1)
  }

  const prevStream = () => {
    setStreamIndex(streamIndex - 1)
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
