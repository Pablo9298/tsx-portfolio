import styled from "styled-components"
import { StyledTitle } from "../../../components/StyledTitle"
import { theme } from "../../../styles/Theme"

const TestimonySection = styled.section`
  padding: 100px 0 150px 0;
  position: relative;

  ${StyledTitle} {
    margin-bottom: 70px;
  }

  @media ${theme.media.mobile} {
    padding: 50px 0;

    ${StyledTitle} {
    margin-bottom: 60px;
  }
  }
`

const IconWrapper = styled.div`
  position: relative;
  margin-bottom: 100px;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: #4544446f;
    position: absolute;
    transform: rotate(45deg) translate(-50%, -50%);
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }

  @media ${theme.media.mobile} {
    margin-bottom: 70px;
  }
`

export const S = {
  TestimonySection,
  IconWrapper
}