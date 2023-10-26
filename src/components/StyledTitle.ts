import styled from "styled-components";
import { font } from "../styles/Common";

type TitlePropsType = {
  align?: string
};

 export const StyledTitle = styled.h2<TitlePropsType>`
  ${font({Fmax: 46, Fmin: 30})}
  text-align: ${props => props.align || 'left'};
`;