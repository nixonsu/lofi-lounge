import React, { useContext } from 'react'
import PauseIcon from '../../public/svgs/Pause.svg'
import PlayIcon from '../../public/svgs/Play.svg'
import NextIcon from '../../public/svgs/Next.svg'
import ShuffleIcon from '../../public/svgs/Shuffle.svg'
import PlaylistIcon from '../../public/svgs/Playlist.svg'
import { ThemeContext } from 'styled-components'
import { Theme } from '@/styles/Themes'

interface Icons {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>
}

const icons: Icons = {
  pause: PauseIcon,
  play: PlayIcon,
  next: NextIcon,
  shuffle: ShuffleIcon,
  playlist: PlaylistIcon,
}

interface IconProps {
  name: string
  height?: number
  width?: number
  style?: React.CSSProperties
}

const Icon = ({ name, height, width, style }: IconProps) => {
  const theme: Theme = useContext(ThemeContext)

  const SpecificIcon = icons[name]

  return (
    <SpecificIcon
      height={height ?? 25}
      width={width ?? 25}
      style={{ filter: theme.greenDropShadow, ...style }}
      fill={theme.text}
    />
  )
}

export default Icon
