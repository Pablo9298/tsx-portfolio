import styled from "styled-components";
import avatarDecor from '../../../assets/images/avatar-decor.png'
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { FlexContainer } from "../../../components/FlexContainer";

const Main = styled.section`
  padding: 230px 0 125px 0;

  button {
    margin-bottom: 25px;
  }

  @media ${theme.media.tablet} {
    ${FlexContainer} {
      justify-content: center;
      text-align: center;
    }
  }

  @media ${theme.media.mobile} {
    padding: 120px 0 50px;
  }
`

const MainTitle = styled.h1`
${font({ Fmax: 50, Fmin: 36 })}
max-width: 690px;
`

const Descr = styled.p`
color: #BCBCBC;
max-width: 480px;
margin: 15px 0 60px 0;
${font({ weight: 500, Fmax: 25, Fmin: 20 })};

p {
  display: none;
}
`

const PhotoWrapper = styled.div`
  max-width: 380px;
  height: 450px;
  position: relative;
  border-radius: 50px 0px;
  border: 5px solid ${theme.colors.secondColor};

    @media ${theme.media.mobile} {
      height: 400px;
    }
`;

const Photo = styled.img`
    border-radius: 50px 0px;
    position: relative;
    z-index: 1;

    @media ${theme.media.mobile} {
      height: 390px;
      object-fit: cover
    }
`

export const S = {
  Main,
  MainTitle,
  Descr,
  PhotoWrapper,
  Photo
}