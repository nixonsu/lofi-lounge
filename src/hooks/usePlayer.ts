import { useState } from 'react'

export const DEFAULT_VOLUME = 0.5
export const DEFAULT_LOADING = false
export const DEFAULT_PLAYING = false

export const usePlayer = (autoPlay = DEFAULT_PLAYING) => {
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
    setIsPlaying,
  }
}
