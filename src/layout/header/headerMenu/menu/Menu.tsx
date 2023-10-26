import React from "react";
import { S } from "./../HeaderMenu_Styles"

const items = [
  {
    title: 'Projects',
    href: 'projects'
  },
  {
    title: 'Technologies',
    href: 'technologies'
  },
  {
    title: 'Experience',
    href: 'experience'
  },
  {
    title: 'Contact',
    href: 'contact'
  }
]

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, idex) => {
        return (
          <S.MenuItem key={idex}>
            <S.NavLink
              activeClass="active"
              to={item.href}
              smooth={true}
              spy={true}
              offset={-190}>

              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>

              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        )
      })}
    </ul>
  );
}

