import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import {
  Container,
  ImageContainer,
  RightContainer,
  FormContainer,
  Title,
  Form,
  DividerContainer,
  BottomContainer,
} from './styles';

const SignIn = () => (
  <Container>
    <ImageContainer />
    <RightContainer>
      <Title>Invision</Title>
      <FormContainer>
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
        <GoogleLogin buttonText="Sign in with Google" />
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
