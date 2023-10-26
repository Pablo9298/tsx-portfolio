import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { animateScroll as scroll } from "react-scroll";

export const Logo: React.FC = () => {
  return (
      <StyledLogo onClick={() => {scroll.scrollToTop()}}>
        <Icon iconId={'logo'} width="185" height="50" viewBox="0 -3 185 50"/>
      </StyledLogo>
  );
}

const StyledLogo = styled.a`
transition: ${theme.animations.transition};
margin-right: 10px;
cursor: pointer;

  &:hover {
    color: ${theme.colors.secondColor}
  }
`