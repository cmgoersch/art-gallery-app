import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2% 5% 0% 5%; 
    font-family: system-ui;
    text-decoration: none;

  }
  a {
    text-decoration: none;
  }

`;
