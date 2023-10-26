import { StyledTitle } from "../../../components/StyledTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { S } from "./Testimony_Styles";


export const Testimony: React.FC = () => {
  return (
    <S.TestimonySection>
      <Container>
        <StyledTitle align="center">Testimony</StyledTitle>
        <FlexContainer direction="column" align="center">
          <S.IconWrapper>
            <Icon iconId={'quotes'} width="50" height="50" viewBox="-3 -12 50 50" fill={theme.colors.secondColor} />
          </S.IconWrapper>
          <Slider />
        </FlexContainer>
      </Container>
    </S.TestimonySection>
  );
}

