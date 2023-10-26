import { StyledTitle } from "../../../components/StyledTitle";
import { FlexContainer } from "../../../components/FlexContainer";
import { ExperienceBox } from "./experienceBox/ExperienceBox";
import { Container } from "../../../components/Container";
import { S } from "./Experience_Styles";


const ExperienceBoxData = [
  {
    date: '2017',
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
  },
  {
    date: '2019',
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
  },
  {
    date: '2021',
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
  },
  {
    date: '2023',
    descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."
  }
]

export const Experience: React.FC = () => {
  return (
    <S.ExperienceSection id="experience">
      <Container>
        <StyledTitle>Experience</StyledTitle>

        <FlexContainer justify="center">
          <S.StyledBar className="bar"></S.StyledBar>

          {ExperienceBoxData.map((e, index) => {
            return <ExperienceBox
            key={index}
            date={e.date}
            descr={e.descr} />
          })}
    
        </FlexContainer>
      </Container>
    </S.ExperienceSection>
  );
};
