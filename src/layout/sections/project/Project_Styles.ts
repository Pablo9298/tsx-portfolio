import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { StyledTitle } from "../../../components/StyledTitle";

const ProjectSection = styled.section`
  padding: 100px 0 140px 0;
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

export const S = {
  ProjectSection
}