import styled from 'styled-components'

export const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`

export const TickContainer = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  flex-wrap: nowrap;
  gap: 3px;
`

export const Tick = styled.div<{ active: boolean; invisible: boolean }>`
  width: calc(100% / 50);
  height: 100%;
  transition: opacity 0.2s;
  cursor: pointer;
  background-color: ${(props) =>
    props.invisible ? 'transparent' : 'rgb(235, 235, 235)'};
  box-shadow: ${({ theme }) => theme.greenGlow};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
`
