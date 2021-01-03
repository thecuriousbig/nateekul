import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`  
  @font-face {
    font-family: 'Supermarket';
    src: url('/static/fonts/supermarket.ttf');
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, Supermarket, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-stroke: 0.30px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
