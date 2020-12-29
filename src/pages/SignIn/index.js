import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { setLocale } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Google from '../../assets/Img/google.svg';

import {
  Container,
  ImageContainer,
  RightContainer,
  FormContainer,
  Title,
  Input,
  Form,
  DividerContainer,
  GoogleButton,
  BottomContainer,
} from './styles';

setLocale({
  mixed: {
    default: 'Não é válido',
  },
});

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),

  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha inválida'),
});

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  console.log({ errors });
  console.log(errors.password?.message);
  return (
    <Container>
      <ImageContainer />
      <RightContainer>
        <FormContainer>
          <Title>Invision</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Welcome to Invision</h1>
            <p>Users name or Email</p>
            <Input
              name="email"
              ref={register}
              type="text"
              placeholder="exemplo@email.com"
              error={errors?.email}
            />
            <p>Password</p>
            <Input
              name="password"
              ref={register}
              type="password"
              placeholder="**************"
              error={errors.password?.message}
            />
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
};
export default SignIn;
