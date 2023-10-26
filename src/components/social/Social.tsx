import React from "react";
import { Icon } from "../icon/Icon";
import { S, SocialListPropsType } from "./Social_Styles";

const socialListData = [
  {
    iconId: 'githubb'
  },
  {
    iconId: 'linkedin'
  },
  {
    iconId: 'telegram'
  }
]

export const Social: React.FC<SocialListPropsType> = (props: SocialListPropsType) => {
  return (
    <S.SocialList gap={props.gap}>
      {socialListData.map((s, index) => {
        return (
          <li key={index}>
            <a href="">
              <Icon iconId={s.iconId} />
            </a>
          </li>
        );
      })}
    </S.SocialList>
  );
}