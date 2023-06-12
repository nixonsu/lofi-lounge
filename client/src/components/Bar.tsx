import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Playlist } from './icons/Playlist.svg'

const Bar = () => {
  return (
    <OpaqueContainer>
      <div className="flex flex-1 gap-3">
        <IconButton icon={<Playlist className="fill-white" />} />
        <IconButton icon={<Playlist className="fill-white" />} />
        <IconButton icon={<Playlist className="fill-white" />} />
        <IconButton icon={<Playlist className="fill-white" />} />
        <IconButton icon={<Playlist className="fill-white" />} />
        <IconButton icon={<Playlist className="fill-white" />} />
        <IconButton icon={<Playlist className="fill-white" />} />
      </div>
    </OpaqueContainer>
  )
}

export default Bar
