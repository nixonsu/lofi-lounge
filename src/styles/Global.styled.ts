import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    src: url('/fonts/Unibody.otf');
    font-family: 'Unibody';
    overscroll-behavior: none;
  }

  body {
    font-family: 'Unibody';
  }
`

export default GlobalStyles
