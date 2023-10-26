import styled from "styled-components";
import { theme } from "../../styles/Theme";

export type SocialListPropsType = {
  gap?: string
}

export const SocialList = styled.ul<SocialListPropsType>`
  display: flex;
  gap: ${props => props.gap};

  a {

    & svg {
      transition: ${theme.animations.transition};
      }
    
    &:hover {
      color: ${theme.colors.secondColor};

      & svg {
        transform: rotate(5deg) translate(2px, -2px);
      }
    }
  }

  @media ${theme.media.screen850} {
    display: none;
  }
`

export const S = {
  SocialList
}