import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Slider = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Slide = styled.div`
  cursor: grab;
`

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  max-width: 800px;
  width: 100%;
`

const Name = styled.span`
  font-size: 20px;
  display: inline-block;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin: 25px 0 45px;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 20px;
    background-color: ${theme.colors.font};
    cursor: pointer;

    & + span {
      margin-left: 10px;
    }

    &.active {
      background-color: ${theme.colors.secondColor};
      width: 30px;
    }
  }
`
export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination
}