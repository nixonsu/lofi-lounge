import Popup from './Popup'
import IconButton from './IconButton'
import { ReactComponent as Play } from './icons/Play.svg'
import { ReactComponent as Pause } from './icons/Pause.svg'
import { ReactComponent as Reset } from './icons/Restart.svg'
import { ReactComponent as Plus } from './icons/Plus.svg'

interface Props {
  onClose: () => void
  className?: string
  isRunning: boolean
  minutesDisplay: string
  secondsDisplay: string
  pause: () => void
  play: () => void
  reset: () => void
  incrementTimer: (value: number) => void
}

const TimerView = ({
  onClose,
  className,
  isRunning,
  minutesDisplay,
  secondsDisplay,
  pause,
  play,
  reset,
  incrementTimer,
}: Props) => {
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
          <IconButton
            icon={<Pause className="fill-white green-drop-shadow" />}
            onClick={pause}
          />
        ) : (
          <IconButton
            icon={
              <Play className="fill-white green-drop-shadow" onClick={play} />
            }
          />
        )}
        <IconButton
          icon={<Reset className="fill-white green-drop-shadow" />}
          onClick={reset}
        />
        <IconButton
          icon={<Plus className="fill-white green-drop-shadow" />}
          onClick={() => incrementTimer(300)}
        />
      </div>
    </Popup>
  )
}

export default TimerView
