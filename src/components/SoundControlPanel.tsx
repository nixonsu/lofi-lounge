import SoundPlayer from './SoundPlayer'
import Popup from './Popup'
import { ReactComponent as RainIcon } from './icons/Rain.svg'
import { ReactComponent as FireIcon } from './icons/Fire.svg'
import { ReactComponent as Coffee } from './icons/Coffee.svg'
import { ReactComponent as MoonIcon } from './icons/Moon.svg'
import { ReactComponent as BirdIcon } from './icons/Bird.svg'
import { ReactComponent as WindIcon } from './icons/Wind.svg'

interface Props {
  onClose?: () => void
  className?: string
}

const sounds = [
  {
    icon: <RainIcon />,
    audioSrc: '/audio/rain.mp3',
  },
  {
    icon: <FireIcon />,
    audioSrc: '/audio/fireplace.mp3',
  },
  {
    icon: <WindIcon />,
    audioSrc: '/audio/storm.mp3',
  },
  {
    icon: <MoonIcon />,
    audioSrc: '/audio/night.mp3',
  },
  {
    icon: <Coffee />,
    audioSrc: '/audio/restaurant.mp3',
  },
  {
    icon: <BirdIcon />,
    audioSrc: '/audio/bird.mp3',
  },
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
