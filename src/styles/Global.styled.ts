import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: ${theme.colors.font};
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  width: 100%;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  background-color: unset;
  border: none;
}

section:nth-of-type(even) {
  background-color: ${theme.colors.secondaryBg};
}

section:nth-of-type(odd) {
  background-color: ${theme.colors.primaryBg};
}
`