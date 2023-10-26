import { S } from "../Experience_Styles";



type ExperienceBoxPropsType = {
  descr: string
  date: string
}

export const ExperienceBox: React.FC<ExperienceBoxPropsType> = (props: ExperienceBoxPropsType) => {
  return (
    <S.ExperienceBox>
      <S.ExperienceBoxDate>{props.date}</S.ExperienceBoxDate>
      <S.Cyrcle></S.Cyrcle>
      <S.Descr>
        {props.descr}
      </S.Descr>
    </S.ExperienceBox>
  );
};


