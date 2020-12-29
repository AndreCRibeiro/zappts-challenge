/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Google from '../../assets/Img/google.svg';

import {
  Container,
  ImageContainer,
  RightContainer,
  FormContainer,
  Title,
  Form,
  DividerContainer,
  GoogleButton,
  BottomContainer,
  TermsContainer,
} from './styles';

const SignUp = () => (
  <Container>
    <ImageContainer />
    <RightContainer>
      <FormContainer>
        <Title>Invision</Title>
        <Form>
          <h1>Getting Started</h1>
          <p>Full Name</p>
          <input type="text" placeholder="Nome Completo Exemplo" />
          <p>Email</p>
          <input type="email" placeholder="exemplo@email.com" />
          <p>Password</p>
          <input type="password" placeholder="**************" />
          <button type="submit">Sign up</button>
        </Form>
        <DividerContainer>
          <div />
          <p>Or</p>
          <div />
        </DividerContainer>
        <GoogleButton>
          <img src={Google} alt={Google} />
          <p>Sign up with Google</p>
        </GoogleButton>
        <TermsContainer>
          <p>By signing up, you agree to </p>
          <b>Invision</b>
        </TermsContainer>
        <BottomContainer>
          <a href="">Terms of Conditions</a>
          <p>and</p>
          <a href="">Privacy Policy</a>
        </BottomContainer>
        <BottomContainer last>
          <p>Already on</p>
          <b>Invision?</b>
          <Link to="/">Log in</Link>
        </BottomContainer>
      </FormContainer>
    </RightContainer>
  </Container>
);

export default SignUp;
