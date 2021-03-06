import { createGlobalStyle } from 'styled-components';
import { device } from './sizeDevice'

const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;

        @media ${device.tablet} {
            font-size: 50%;
        }
    }

    html, body, #root {
        height: 100%;
    }

    .App {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    body {
        background: #090909;
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }

    body, input, button {
        font-family: 'IBM Plex Mono', monospace;
    }
`

export default GlobalStyle;