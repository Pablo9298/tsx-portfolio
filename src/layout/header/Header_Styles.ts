import styled from "styled-components";
import { theme } from "../../styles/Theme";


const Header = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 25px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

export const S = {
  Header
}