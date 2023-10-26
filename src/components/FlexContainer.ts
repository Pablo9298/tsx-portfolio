import styled from "styled-components";

type FlexContainerPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  gapRow?: string
  gapColumn?: string
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
  display: flex;
  height: 100%;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'no-wrap'};
  row-gap: ${props => props.gapRow || '0'};
  column-gap: ${props => props.gapColumn || '0'};
  position: relative;
`;