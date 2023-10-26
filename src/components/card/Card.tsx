import { Button } from "../buttons/Button";
import { S } from "./Card_Styles";


type CardPropsType = {
  cardTitle: string
  cardDescr: string
  src: string
}

export const Card: React.FC<CardPropsType> = (props: CardPropsType) => {
  return (
    <S.CardWrapper>
      <S.CardPhoto src={props.src} alt="google-photo" />
      <S.CardTitle>{props.cardTitle}</S.CardTitle>
      <S.CardText>{props.cardDescr}</S.CardText>
      <Button btnTitle="Look It Up" />
    </S.CardWrapper>
  );
};