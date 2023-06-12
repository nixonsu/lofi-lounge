import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Playlist } from './icons/Playlist.svg'

const UtilityBar = () => {
  return (
    <OpaqueContainer>
      <div className="flex flex-1 flex-col gap-3">
        <IconButton icon={<Playlist className="fill-white" />} />
        <IconButton icon={<Playlist className="fill-white" />} />
        <IconButton icon={<Playlist className="fill-white" />} />
      </div>
    </OpaqueContainer>
  )
}

export default UtilityBar
