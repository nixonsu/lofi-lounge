import IconButton from './IconButton'
import OpaqueContainer from './OpaqueContainer'
import { ReactComponent as Fullscreen } from './icons/Logout.svg'

const Bar = () => {
  return (
    <OpaqueContainer>
      <div className="flex flex-1 gap-3">
        <IconButton icon={<Fullscreen className="fill-white" />} />
      </div>
    </OpaqueContainer>
  )
}

export default Bar
