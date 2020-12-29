import React from 'react';

import {
  Container,
  ImageContainer,
  RightContainer,
  FormContainer,
  Title,
  Form,
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
          <input type="password" placeholder="********" />
          <small>Forgot password?</small>
          <button type="submit">Sign In</button>
        </Form>
      </FormContainer>
    </RightContainer>
  </Container>
);

export default SignIn;
