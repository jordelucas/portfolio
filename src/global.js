import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: #090909;
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyle;