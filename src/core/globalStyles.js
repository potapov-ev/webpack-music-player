import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    color: #919496;
    scrollbar-color: #919496;
    scrollbar-width: 14px;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #919496;
  }
  
`;
/* ;, убрать font-family todo */
export default GlobalStyles;