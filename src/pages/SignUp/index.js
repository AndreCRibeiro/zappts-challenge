/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { setLocale } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Google from '../../assets/Img/google.svg';
import Data from '../../assets/Img/Data.png';
import Carousel from '../../components/Carousel';

import {
  Container,
  ImageContainer,
  RightContainer,
  FormContainer,
  Title,
  Form,
  Input,
  Text,
  DividerContainer,
  GoogleButton,
  BottomContainer,
  TermsContainer,
} from './styles';

setLocale({
  mixed: {
    default: 'Não é válido',
  },
});

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha muito curta, mínimo 6 caracteres'),
});

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <ImageContainer>
        <Carousel image1={Data} image2={Data} image3={Data} image4={Data} />
      </ImageContainer>
      <RightContainer>
        <FormContainer>
          <Title>Invision</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Getting Started</h1>
            <p>Full Name</p>
            <Input
              name="name"
              ref={register}
              type="text"
              placeholder="Nome Completo Exemplo"
            />
            {errors.name?.message && <Text error>{errors?.name.message}</Text>}
            <p>Email</p>
            <Input
              name="email"
              ref={register}
              type="text"
              placeholder="exemplo@email.com"
              error={errors.email?.message}
            />
            {errors.email?.message && (
              <Text error>{errors?.email.message}</Text>
            )}
            <p>Password</p>
            <Input
              name="password"
              ref={register}
              type="password"
              placeholder="**************"
              error={errors.password?.message}
            />
            {errors.password?.message && (
              <Text error>{errors?.password.message}</Text>
            )}
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
};

export default SignUp;
