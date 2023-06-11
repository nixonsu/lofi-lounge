import IconButton from './IconButton'
import { ReactComponent as Play } from './icons/Play.svg'
import { ReactComponent as Next } from './icons/Next.svg'
import { ReactComponent as Shuffle } from './icons/Shuffle.svg'
import { ReactComponent as Playlist } from './icons/Playlist.svg'

const Radio = () => {
  return (
    <div className="flex flex-col items-start w-1/4 text-white">
      <p>Current stream title</p>

      <div className="flex items-center justify-center">
        <IconButton icon={<Play />} />
        <IconButton icon={<Next className="rotate-180" />} />
        <IconButton icon={<Next />} />
        <IconButton icon={<Shuffle />} />
        <p>Slider</p>
        <IconButton icon={<Playlist />} />
      </div>
    </div>
  )
}

export default Radio
