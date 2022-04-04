import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url("/Montserrat-Regular.ttf") format("ttf");
    font-weight: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/Montserrat-Bold.ttf") format("ttf");
    font-weight: bold;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, Sans-Serif;
  }
`;

export default GlobalStyle;