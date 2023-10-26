import styled from "styled-components"
import { StyledTitle } from "../../../components/StyledTitle"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"


//Technologies
const TechnologiesSection = styled.section`
  padding: 100px 0 170px 0;
  position: relative;

  ${StyledTitle} {
    margin-bottom: 70px;
  }

  @media ${theme.media.mobile} {
    padding: 50px 0;

    ${StyledTitle} {
    margin-bottom: 40px;
  }
  }
`

const TechnologiesList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 50px;

    & li {
      transition: ${theme.animations.transition};

      &:hover {
        transform: translateY(-10px);
      }
    }

    @media ${theme.media.tablet} {
      gap: 15px;

      svg {
        width: 70px;
        height: 70px;
      }
    }
`

const ProgressWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin-bottom: 120px;

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`

// Progressbar

const Progressbar = styled.div`

.progressBar {
  display: block;
  height: 18px;
  border-radius: 83px;
  background: #162950;
  margin-bottom: 25px;

  @media ${theme.media.mobile} {
      height: 15px;
      margin-bottom: 15px;
  }
}

.progressBarSecond {
display: block;
height: 18px;
border-radius: 83px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);

@media ${theme.media.mobile} {
      height: 15px;
  }
}
`

const ProgressTitle = styled.h3`
  ${font({Fmax: 24, Fmin: 18})};
  font-weight: 600;
  margin-left: 30px;
`

export const S = {
  TechnologiesSection,
  TechnologiesList,
  ProgressWrapper,
  Progressbar,
  ProgressTitle
}