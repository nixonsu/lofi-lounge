import { useState } from 'react'

const DEFAULT_VOLUME = 0.5
const DEFAULT_PLAYING = false
const DEFAULT_LOADING = false

export const usePlayer = () => {
  const [volume, setVolume] = useState<number>(DEFAULT_VOLUME)
  const [isPlaying, setIsPlaying] = useState<boolean>(DEFAULT_PLAYING)
  const [isLoading, setIsLoading] = useState<boolean>(DEFAULT_LOADING)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return {
    volume,
    isPlaying,
    isLoading,
    setIsLoading,
    setVolume,
    togglePlay,
  }
}
