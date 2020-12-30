/* eslint-disable react/jsx-props-no-spreading */
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
  Input,
  Text,
  Form,
  DividerContainer,
  GoogleButton,
  BottomContainer,
} from './styles';

const SignIn = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  console.log({ isTabletOrMobile });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    toast.success('Usuário fez login com sucesso!!', {
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
            <h1>Welcome to Invision</h1>
            <p>Users name or Email</p>
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
