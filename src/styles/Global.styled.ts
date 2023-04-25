import { createGlobalStyle } from 'styled-components'
import { Theme } from './Themes'

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    src: url('/fonts/Unibody.otf');
    font-family: 'Unibody';
    overscroll-behavior: none;
  }

  body {
    font-family: 'Unibody';
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
    text-shadow: ${({ theme }) => theme.textShadow};
  }
`

export default GlobalStyles
