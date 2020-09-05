import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    font-family: Hammersmith One;
    font-size: 28px;
  }
`;

export const Colors = {
  azul: "#4285F4",
  verde: "#34A853",
  amarelo: "#FBBC05",
  laranja: "#E67E22",
  vermelho: "#EA4335",
  roxo: "#9B59B6",
}