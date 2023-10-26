import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { animateScroll as scroll } from "react-scroll";


export const GoTopBtn = () => {

  const [showBtn, setshowBtn] = React.useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowBtn(true)
      } else {
        setshowBtn(false)
      }
    })
  }, [])

  return (
    <>
      {showBtn && (
        <GoTopButton onClick={() => { scroll.scrollToTop() }}>
          <Icon iconId={"arrowGoTop"} width="25" height="25" viewBox="0 0 16 15" />
        </GoTopButton>
      )}
    </>
  );
}

const GoTopButton = styled.button`
  padding: 15px;
  background-color: transparent;
  position: fixed;
  bottom: 100px;
  right: 30px;
  color: ${theme.colors.font};

  svg {
    transition: ${theme.animations.transition};
  }
  

  &:hover svg {
    color: ${theme.colors.secondColor};
  }
`