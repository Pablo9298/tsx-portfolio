import React from 'react';
import avaratImg from '../../../assets/images/avatar.png'
import { FlexContainer } from '../../../components/FlexContainer';
import { Button } from '../../../components/buttons/Button';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexContainer justify={'space-between'} align={'center'} wrap='wrap' >
          <div>
            <S.MainTitle>
              I am Pavlo Biiuts
            </S.MainTitle>
            <S.Descr>
              <p>A Web Developer</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.Descr>
            <Button btnTitle={'Let’s Begin'} />
          </div>

          <Tilt >
            <S.PhotoWrapper>
              <S.Photo src={avaratImg} alt="avatar" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexContainer>
      </Container>
    </S.Main >
  );
};

