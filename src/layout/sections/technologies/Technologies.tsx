import { StyledTitle } from "../../../components/StyledTitle";
import { Progressbar } from "./progressbar/Progressbar";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";
import { FlexContainer } from "../../../components/FlexContainer";
import { S } from "./Technologies_Styles";


const progressBarData = [
  {
    progresBarTitle: 'Html',
    progressBarProcent: 90
  },
  {
    progresBarTitle: 'Css, Sass',
    progressBarProcent: 75
  },
  {
    progresBarTitle: 'React',
    progressBarProcent: 50
  },
  {
    progresBarTitle: 'Styled components',
    progressBarProcent: 70
  }
]

const technologiesListData = [
  {
    iconId: 'git'
  },
  {
    iconId: 'github'
  },
  {
    iconId: 'figma'
  }
]

export const Technologies: React.FC = () => {
  return (
    <S.TechnologiesSection id="technologies">
      <Container>
        <StyledTitle>Technologies</StyledTitle>
        <FlexContainer justify="center">
          <S.ProgressWrapper >

            {progressBarData.map((p, index) => {
              return <Progressbar
                key={index}
                progresBarTitle={p.progresBarTitle}
                progressBarProcent={p.progressBarProcent} />
            })}

          </S.ProgressWrapper>
        </FlexContainer>

        <StyledTitle align={'center'}>Additional technologies and skills</StyledTitle>

        <S.TechnologiesList>
          {technologiesListData.map((t, index) => {
            return (
              <li key={index}>
                <a href="">
                  <Icon iconId={t.iconId} width='100' height="100" viewBox="0 0 100 100" />
                </a>
              </li>
            );
          })}
        </S.TechnologiesList>
      </Container>
    </S.TechnologiesSection>
  );
}


