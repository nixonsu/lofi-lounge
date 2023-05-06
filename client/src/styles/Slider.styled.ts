import styled from 'styled-components'

export const StyledSlider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const TickContainer = styled.div`
  width: 300px;
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
  box-shadow: ${({ invisible, theme }) =>
    invisible ? 'none' : theme.greenGlow};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
`
