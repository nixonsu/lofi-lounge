import Popup from './Popup'
import useTimer from '../hooks/useTimer'
import IconButton from './IconButton'
import { ReactComponent as Play } from './icons/Play.svg'
import { ReactComponent as Pause } from './icons/Pause.svg'
import { ReactComponent as Reset } from './icons/Restart.svg'
import { ReactComponent as Plus } from './icons/Plus.svg'
import { useEffect } from 'react'
import { useRootStore } from '../store/rootStore'

interface Props {
  onClose: () => void
  className?: string
}

const Timer = ({ onClose, className }: Props) => {
  const {
    play,
    pause,
    isRunning,
    reset,
    getDisplayTime,
    incrementTimer,
    isDone,
  } = useTimer(2)
  const { minutesDisplay, secondsDisplay } = getDisplayTime()

  const {
    uiStore: { setIsTimerDone },
  } = useRootStore()

  useEffect(() => {
    if (isDone) {
      setIsTimerDone(true)
    } else {
      setIsTimerDone(false)
    }
  }, [isDone, setIsTimerDone])

  return (
    <Popup className={`${className}`} onClose={onClose}>
      <div
        className={`flex w-full justify-center items-center ${
          minutesDisplay == '00' && secondsDisplay == '00' && 'red-text-glow'
        }`}
      >
        {minutesDisplay} : {secondsDisplay}
      </div>

      <div className="flex w-full justify-center items-center gap-2">
        {isRunning ? (
          <IconButton icon={<Pause />} onClick={pause} />
        ) : (
          <IconButton icon={<Play />} onClick={play} />
        )}
        <IconButton icon={<Reset />} onClick={reset} />
        <IconButton icon={<Plus />} onClick={() => incrementTimer(300)} />
      </div>
    </Popup>
  )
}

export default Timer
