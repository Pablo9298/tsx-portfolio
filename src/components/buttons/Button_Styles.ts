import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Button = styled.button`
  font-size: 20px;
  border-radius: 80px;
  background: ${theme.colors.accent};
  padding: 15px 65px;
  color: ${theme.colors.font};
  transition: ${theme.animations.transition};

  &:hover {
    background: transparent;
    outline: 1px solid ${theme.colors.secondColor};
    color: ${theme.colors.secondColor};
  }
`

export const S = {
  Button
}