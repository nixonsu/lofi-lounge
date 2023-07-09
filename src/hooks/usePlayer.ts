import { useState } from 'react'

const DEFAULT_VOLUME = 0.5
const DEFAULT_LOADING = false

export const usePlayer = (autoPlay = false) => {
  const [volume, setVolume] = useState<number>(DEFAULT_VOLUME)
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay)
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
