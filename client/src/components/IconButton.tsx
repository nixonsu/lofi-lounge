import { StyledIconButton } from '../styles/IconButton.styled'

interface IconButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

const IconButton = ({ onClick, children }: IconButtonProps) => {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>
}

export default IconButton
