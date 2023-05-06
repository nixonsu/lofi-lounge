import Image from 'next/image'
import styled from 'styled-components'

export const BgImageContainer = styled(Image)<{
  zindex?: number
  opacity?: number
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: ${(props) => (props.zindex ? props.zindex : 0)};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`
