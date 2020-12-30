/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validation';
import Google from '../../assets/Img/google.svg';
import Image1 from '../../assets/Img/Data.png';
import Image2 from '../../assets/Img/image.svg';
import Image3 from '../../assets/Img/image2.svg';
import Image4 from '../../assets/Img/image3.svg';
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

const SignUp = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    toast.success('Usuário cadastrado com sucesso!!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <Container>
      {!isTabletOrMobile && (
        <ImageContainer>
          <Carousel
            image1={Image1}
            image2={Image2}
            image3={Image3}
            image4={Image4}
          />
        </ImageContainer>
      )}
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
