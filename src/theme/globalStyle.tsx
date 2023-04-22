import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const globalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    font-size: 16px;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
  
`;

export default globalStyle;
