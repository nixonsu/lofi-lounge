import SoundPlayer from './SoundPlayer'
import Popup from './Popup'
import { ReactComponent as Rain } from './icons/Rain.svg'
import { ReactComponent as Fire } from './icons/Fire.svg'
import { ReactComponent as Coffee } from './icons/Coffee.svg'
import { ReactComponent as Moon } from './icons/Moon.svg'
import { ReactComponent as Bird } from './icons/Bird.svg'
import { ReactComponent as Wind } from './icons/Wind.svg'

interface Props {
  onClose?: () => void
  className?: string
}

const sounds = [
  {
    icon: <Rain className="fill-white green-drop-shadow" />,
    audioSrc: '/audio/rain.mp3',
  },
  {
    icon: <Fire className="fill-white green-drop-shadow" />,
    audioSrc: '/audio/fireplace.mp3',
  },
  {
    icon: <Wind className="fill-white green-drop-shadow" />,
    audioSrc: '/audio/storm.mp3',
  },
  {
    icon: <Moon className="fill-white green-drop-shadow" />,
    audioSrc: '/audio/night.mp3',
  },
  {
    icon: <Coffee className="fill-white" />,
    audioSrc: '/audio/restaurant.mp3',
  },
  { icon: <Bird className="fill-white" />, audioSrc: '/audio/bird.mp3' },
]

const SoundControlPanel = ({ onClose, className }: Props) => {
  return (
    <Popup className={`${className} h-full`} onClose={onClose} title={'sounds'}>
      <div className="flex flex-col gap-4 overflow-y-scroll pr-4">
        {sounds.map((sound) => (
          <SoundPlayer
            key={sound.audioSrc}
            icon={sound.icon}
            audioSrc={sound.audioSrc}
          />
        ))}
      </div>
    </Popup>
  )
}

export default SoundControlPanel
