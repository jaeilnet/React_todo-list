import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    font-size: 12px;
  }
  a{
    text-decoration: none;
  }
  button{
    background-color: #339af0;
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default GlobalStyles