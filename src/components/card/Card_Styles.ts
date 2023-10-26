import styled from "styled-components"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"

const CardWrapper = styled.div`
max-width: 550px;
width: 100%;
border-radius: 50px 0px;
border: 1px solid #A39D9D;
background-color: ${theme.colors.primaryBg};
padding: 25px;

@media ${theme.media.screen1200} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
    padding: 15px;
}

@media ${theme.media.tablet} {
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
}
`

const CardPhoto = styled.img`
max-width: 500px;
max-height: 280px;
object-fit: cover;
object-position: left;
border-radius: 24px 8px 8px 8px;
margin-bottom: 40px;

@media ${theme.media.screen1200} {
    border-radius: 40px 0;
    margin: 0 auto 15px;
}
`

const CardTitle = styled.h3`
text-align: center;
margin-bottom: 40px;
padding-bottom: 25px;
position: relative;
${font({Fmax: 30, Fmin: 22})};

&::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 300px;
  width: 100%;
  height: 4px;
  border-radius: 80px;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
}

@media ${theme.media.screen1200} {
    margin-bottom: 20px;
    padding-bottom: 10px;
}
`

const CardText = styled.p`
font-size: 18px;
font-weight: 500;
margin-bottom: 50px;

@media ${theme.media.screen1200} {
    margin-bottom: 15px;
    -webkit-line-clamp: 3; 
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    overflow: hidden;
}
`

export const S = {
  CardWrapper,
  CardPhoto,
  CardTitle,
  CardText
}