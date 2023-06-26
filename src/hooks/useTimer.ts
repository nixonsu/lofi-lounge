import { useState, useEffect } from 'react'

const useTimer = (initialSeconds: number) => {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)

  const play = () => {
    if (seconds > 0) {
      setIsRunning(true)
    }
  }

  const pause = () => {
    setIsRunning(false)
  }

  const reset = () => {
    setIsRunning(false)
    setSeconds(initialSeconds)
  }

  const getDisplayTime = () => {
    const minutesDisplay = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0')
    const secondsDisplay = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0')

    return { minutesDisplay, secondsDisplay }
  }

  const incrementTimer = (value: number) => {
    if (seconds + value <= 3600) {
      setSeconds((prevSeconds) => prevSeconds + 300)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timer

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1)
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning, seconds])

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false)
    }
  }, [seconds])

  return {
    play,
    pause,
    isRunning,
    seconds,
    reset,
    getDisplayTime,
    incrementTimer,
  }
}

export default useTimer
