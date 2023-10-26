import React, { useState } from "react";
import { Social } from "../../../../components/social/Social";
import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

export const MobileMenu: React.FC = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }

  return (
    <S.MobileMenu>
      <S.BurgerButton
        isOpen={menuIsOpen}
        onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => { setMenuIsOpen(false) }}>
        <Menu />
        <Social />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
}