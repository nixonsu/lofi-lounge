import useTimer from '../hooks/useTimer'
import TimerView from './TimerView'
import { useRootStore } from '../store/rootStore'
import FadeAnimation from './animations/FadeAnimation'

const Timer = () => {
  const { play, pause, isRunning, reset, getDisplayTime, incrementTimer } =
    useTimer(2)
  const {
    uiStore: { closeTimer, isTimerOpen },
  } = useRootStore()
  const { minutesDisplay, secondsDisplay } = getDisplayTime()

  return (
    <FadeAnimation isVisible={isTimerOpen} className="h-full">
      <TimerView
        onClose={closeTimer}
        isRunning={isRunning}
        minutesDisplay={minutesDisplay}
        secondsDisplay={secondsDisplay}
        play={play}
        pause={pause}
        reset={reset}
        incrementTimer={incrementTimer}
      />
    </FadeAnimation>
  )
}

export default Timer
