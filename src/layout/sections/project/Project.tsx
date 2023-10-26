import { Card } from "../../../components/card/Card";
import { FlexContainer } from "../../../components/FlexContainer";
import { StyledTitle } from "../../../components/StyledTitle";
import googleImg from '../../../assets/images/google.jpg'
import { Container } from "../../../components/Container";
import { S } from "./Project_Styles";
import { Fade } from "react-awesome-reveal";

const cardData = [
  {
    src: googleImg,
    cardTitle: "PROJECT 1",
    cardDescr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: googleImg,
    cardTitle: "PROJECT 2",
    cardDescr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    src: googleImg,
    cardTitle: "PROJECT 3",
    cardDescr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquadadwadawdaw."
  },
  {
    src: googleImg,
    cardTitle: "PROJECT 4",
    cardDescr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquadawdwadaww dawdawdaw."
  }
]

export const Project: React.FC = () => {
  return (
    <S.ProjectSection id="projects">
      <Container>
        <StyledTitle>Projects</StyledTitle>
        <FlexContainer wrap="wrap" gapRow="60px" gapColumn="45px">
          <Fade 
          cascade={true}
          direction={'left'}
          fraction={0.2}
          triggerOnce={true}>
            {cardData.map((c, index) => {
              return <Card
                src={c.src} key={index}
                cardTitle={c.cardTitle}
                cardDescr={c.cardDescr}
              />
            })}
          </Fade>
        </FlexContainer>
      </Container>
    </S.ProjectSection>
  );
}



