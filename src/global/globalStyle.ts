import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

  body {
    margin:0;
    padding:0;
    height:100%;
    font-family: 'Pretendard-Regular', "Inter", sans-serif;
  }

  a{
    color: black;
    text-decoration: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyles;
