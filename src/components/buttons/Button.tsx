import { S } from "./Button_Styles";

type ButtonPropsType = {
  btnTitle?: string
  type?: string
}

export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  return (
    <S.Button >
      {props.btnTitle}
    </S.Button>
  );
};
