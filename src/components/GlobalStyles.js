import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    html {
        font-size: 62.5%;

        @media (max-width: 950px) {
            font-size: 45%;
        }
    }
    body {
        font-family: 'Noto Serif JP', serif;
    }
    h1 {
        font-size: 2.6rem;
    }
    h2 {
        font-size: 4.8rem;
        font-weight: bold;
    }
    h3 {
        font-size: 3rem;
        font-weight: normal;
    }
    h4,h5 {
        font-size: 2.8rem;
    }
    li, button, label, input, p {
        font-size: 2rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
`;

export default GlobalStyles;
