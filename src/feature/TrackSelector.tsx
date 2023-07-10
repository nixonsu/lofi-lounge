import Card from '@components/Card'
import Modal from '@components/Modal'
import ScaleAnimation from '@components/animations/ScaleAnimation'
import { useRootStore } from '@store/rootStore'
import { observer } from 'mobx-react'

interface Props {
  onClose?: () => void
}

const TrackSelector = ({ onClose }: Props) => {
  const { trackStore } = useRootStore()

  return (
    <Modal title={'track selection'} onClose={onClose}>
      <div className="grid h-full w-full grid-cols-fluid gap-x-4 gap-y-4 overflow-y-scroll p-4">
        {trackStore.tracks.map((track) => (
          <ScaleAnimation key={track.id} scaleFactor={1.02}>
            <Card
              id={track.id}
              src={track.thumbnailUrl}
              text={track.title}
              handleClick={trackStore.setCurrentTrack}
              isSelected={track.id === trackStore.currentTrack.id}
            />
          </ScaleAnimation>
        ))}
      </div>
    </Modal>
  )
}

export default observer(TrackSelector)
