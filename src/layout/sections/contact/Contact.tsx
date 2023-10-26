import React, {  ElementRef, useRef } from "react";
import { StyledTitle } from "../../../components/StyledTitle";
import { Button } from "../../../components/buttons/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contact_Styles";
import emailjs from '@emailjs/browser';


export const Contact: React.FC = () => {

  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs.sendForm('service_kvn7out', 'template_yu2qggi', form.current, 'mJnEXMAzvvEjlYcBB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <S.ContactsSection id={'contact'}>
      <Container>
        <StyledTitle align='center'>Contact</StyledTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={'Name'} name={'user_name'}/>
          <S.Field required placeholder={'Email'} name={'email'} type={'email'}/>
          <S.Field required placeholder={'Subject'} name={'subject'}/>
          <S.Field required placeholder={'message'} as={'textarea'} name={'message'} />
          <Button btnTitle={'Send message'} type={'submit'} />
        </S.Form>
      </Container>
    </S.ContactsSection>
  );
}