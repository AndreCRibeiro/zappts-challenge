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
} from './styles';

const SignIn = () => (
  <Container>
    <ImageContainer />
    <RightContainer>
      <FormContainer>
        <Title>Invision</Title>
        <Form>
          <h1>Welcome to Invision</h1>
          <p>Users name or Email</p>
          <input type="text" placeholder="exemplo@email.com" />
          <p>Password</p>
          <input type="password" placeholder="**************" />
          <small>Forgot password?</small>
          <button type="submit">Sign in</button>
        </Form>
        <DividerContainer>
          <div />
          <p>Or</p>
          <div />
        </DividerContainer>
        <GoogleButton>
          <img src={Google} alt={Google} />
          <p>Sign in with Google</p>
        </GoogleButton>
        <BottomContainer>
          <p>New</p>
          <b>Invision?</b>
          <Link to="/signup">Create Account</Link>
        </BottomContainer>
      </FormContainer>
    </RightContainer>
  </Container>
);

export default SignIn;
