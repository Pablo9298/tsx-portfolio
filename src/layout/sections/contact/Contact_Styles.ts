import styled from "styled-components"
import { StyledTitle } from "../../../components/StyledTitle"
import { theme } from "../../../styles/Theme"

const ContactsSection = styled.section`
  padding: 100px 0;
  position: relative;

  ${StyledTitle} {
    margin-bottom: 70px;
  }

  @media ${theme.media.mobile} {
    padding: 50px 0;

  ${StyledTitle} {
    margin-bottom: 40px;
  }
  }
`

const Form = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 160px;
  }
`

const Field = styled.input`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  font-size: 12px;
  letter-spacing: 0.05em;
  padding: 10px 20px;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  color: ${theme.colors.font};

  &::placeholder {
    text-transform: capitalize;
    color: ${theme.colors.placeholderColor};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.secondColor}
  }
`

export const S = {
  ContactsSection,
  Form,
  Field
}