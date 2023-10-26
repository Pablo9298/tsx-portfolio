import styled from "styled-components"
import { StyledTitle } from "../../../components/StyledTitle"
import { FlexContainer } from "../../../components/FlexContainer"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

//Experience

const ExperienceSection = styled.section`
  padding: 100px 0 140px 0;
  
  ${StyledTitle} {
    margin-bottom: 70px;
  }

  @media ${theme.media.screen1020} {
    ${FlexContainer} {
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }

    ${StyledTitle} {
    text-align: center;
  }
  }

  @media ${theme.media.mobile} {
    padding: 50px 0;
  
  ${StyledTitle} {
    margin-bottom: 40px;
  }
  }
`

const StyledBar = styled.div`
    position: absolute;
    top: 40px;
    width: 880px;
    height: 8px;
    border-radius: 83px;
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);

    @media ${theme.media.screen1020} {
      display: none;
    }
`

// ExperienceBox

const ExperienceBox = styled.div`
  max-width: 250px;
  text-align: center;

  &:not(:last-child) {
    margin-right: 35px;

    @media ${theme.media.screen1020} {
      margin-right: 0;;
    }
  }
`

const ExperienceBoxDate = styled.span`
${font({Fmax: 26, Fmin: 22})}
`

const Cyrcle = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: white;
margin: 0 auto 20px;
z-index: 2;
position: relative;
`
const Descr = styled.p`
font-weight: 500;
`

export const S = {
  ExperienceSection,
  StyledBar,
  ExperienceBox,
  ExperienceBoxDate,
  Cyrcle,
  Descr
}