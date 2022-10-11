import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #2F2E41;
    --blue: #009EDD;
    --dark-gray: #2F2E41;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Open Sans';
    font-size: 62.5%;
  }

  body {
    background-color: var(--background);
    color: #fff;
  }
`
