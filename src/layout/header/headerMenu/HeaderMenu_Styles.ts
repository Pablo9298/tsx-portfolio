import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"
import { Link } from "react-scroll"

//Menu

const MenuItem = styled.li`
  position: relative;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.font};
  transition: ${theme.animations.transition};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const NavLink = styled(Link)`
display: block;
font-family: Poppins, sans-serif;
font-size: 16px;
font-weight: 500;
cursor: pointer;
color: transparent;

&::before {
    content: '';
    display: block;
    height: 1px;
    background-color: ${theme.colors.font};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: ${theme.animations.transition}
  }

  &:hover, &.active {

&::before {
  transform: scale(1);
}

${Mask} {
  transform: skewX(10deg) translateX(3px);
  color: ${theme.colors.secondColor};

  & + ${Mask} {
  transform: skewX(10deg) translateX(-3px);
}
}
}
`

//Mobile Menu

const MobileMenu = styled.nav`

`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transform: translateY(-100%);
  transition: 1s ease-in-out;

  ul {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: ${theme.animations.transition};
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
  transform: translateY(0);

  & ul {
    gap: 30px;
  }
  `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  z-index: 999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
    background-color: rgba(255, 255, 255, 0);
  `}

    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
    `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      right: 0;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
    `}
    }
  }
`

//Desctop Menu 

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 25px;

      @media ${theme.media.screen1020} {
        gap: 25px;
    }
  }
`;

export const S = {
  NavLink,
  Mask,
  MenuItem,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu
}