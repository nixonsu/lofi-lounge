import AmbientCard from './AmbientCard'
import Popup from './Popup'
import { ReactComponent as Rain } from './icons/Rain.svg'

interface Props {
  onClose?: () => void
  className?: string
}

const AmbientSoundPlayer = ({ onClose, className }: Props) => {
  return (
    <Popup className={`${className} h-full w-1/2`} onClose={onClose}>
      <div className="flex flex-col">
        <AmbientCard
          icon={<Rain className="fill-white" />}
          audioSrc="/audio/rain.mp3"
        />
      </div>
    </Popup>
  )
}

export default AmbientSoundPlayer
