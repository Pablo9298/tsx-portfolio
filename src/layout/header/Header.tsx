import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { Social } from '../../components/social/Social';
import { Container } from '../../components/Container';
import { FlexContainer } from '../../components/FlexContainer';
import { S } from './Header_Styles';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';


export const Header: React.FC = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 850;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexContainer justify='space-between' align='center'>
          <Logo />

          {width <= breakpoint
            ? <MobileMenu  />
            : <DesktopMenu  />
          }
          
          <Social gap='25px' />
        </FlexContainer>
      </Container>
    </S.Header>
  );
};

