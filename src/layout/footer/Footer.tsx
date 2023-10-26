import { Social } from "../../components/social/Social";
import { FlexContainer } from "../../components/FlexContainer";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";



export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <S.Communication>
            <S.Phone href="tel: +123456789">
              <span>Call me:</span>
              <span>123-456-789</span>
            </S.Phone>
            <S.Email href="mailto: xxx@xyz.com">
              <span>Email:</span>
              <span>xxx@xyz.com</span>
            </S.Email>
          </S.Communication>

          <Social gap="35px" />
        </FlexContainer>
      </Container>
    </S.Footer>
  );
}