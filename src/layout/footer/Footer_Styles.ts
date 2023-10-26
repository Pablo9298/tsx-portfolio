import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 45px 0;
  position: relative;
`

const Communication = styled.div`
  font-size: 22px;
  display: flex;

  @media ${theme.media.tablet} {
    flex-direction: column;
    gap: 35px;
  }
`

const Phone = styled.a`
  transition: ${theme.animations.transition};

  span {
    display: block;
  }

  &:hover {
    color: ${theme.colors.secondColor};
    letter-spacing: 1.2px;
  }
`

const Email = styled.a`
  transition: ${theme.animations.transition};
  margin-left: 150px;
  
  span {
    display: block;
  }

  &:hover {
    color: ${theme.colors.secondColor};
    letter-spacing: 1.2px;
  }

  @media ${theme.media.tablet} {
    margin-left: 0;
  }
`

export const S = {
  Footer,
  Communication,
  Phone,
  Email
}