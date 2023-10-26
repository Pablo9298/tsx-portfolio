import { S } from "../Technologies_Styles";

type ProgressbarPropsType = {
  progresBarTitle: string
  progressBarProcent?: number
}

export const Progressbar: React.FC<ProgressbarPropsType> = (props: ProgressbarPropsType) => {
  return (
    <S.Progressbar>
      <S.ProgressTitle>{props.progresBarTitle}</S.ProgressTitle>
      <span className="progressBar"><span className="progressBarSecond" style={{ width: `${props.progressBarProcent}%` }}></span></span>
    </S.Progressbar>
  );
};



