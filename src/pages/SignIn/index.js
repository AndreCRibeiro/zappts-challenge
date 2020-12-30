/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { setLocale } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import Slider from 'react-slick';
import Google from '../../assets/Img/google.svg';
import Data from '../../assets/Img/Data.png';

import {
  Container,
  ImageContainer,
  CarouselContainer,
  SliderTeste,
  CarouselImage,
  CarouselTextContainer,
  CarouselImageContainer,
  CarouselHeader,
  CarouselText,
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

setLocale({
  mixed: {
    default: 'Não é válido',
  },
});

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),

  password: Yup.string()
    .required('Senha é obrigatória')
    .min(6, 'Senha muito curta, mínimo 6 caracteres'),
});

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  console.log({ errors });
  console.log(errors.password?.message);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <ImageContainer>
        <SliderTeste {...settings} arrows={false}>
          <CarouselContainer>
            <CarouselImageContainer>
              <CarouselImage src={Data} alt={Data} />
            </CarouselImageContainer>
            <CarouselTextContainer>
              <CarouselHeader>Marcenas mattis egestas</CarouselHeader>
              <CarouselText>
                Erdum et malesuada fames ac ante ileum primmer in faucibus
                uspendisse porta.
              </CarouselText>
            </CarouselTextContainer>
          </CarouselContainer>
          <CarouselContainer>
            <CarouselImageContainer>
              <CarouselImage src={Data} alt={Data} />
            </CarouselImageContainer>
            <CarouselTextContainer>
              <CarouselHeader>Marcenas mattis egestas</CarouselHeader>
              <CarouselText>
                Erdum et malesuada fames ac ante ileum primmer in faucibus
                uspendisse porta.
              </CarouselText>
            </CarouselTextContainer>
          </CarouselContainer>
          <CarouselContainer>
            <CarouselImageContainer>
              <CarouselImage src={Data} alt={Data} />
            </CarouselImageContainer>
            <CarouselTextContainer>
              <CarouselHeader>Marcenas mattis egestas</CarouselHeader>
              <CarouselText>
                Erdum et malesuada fames ac ante ileum primmer in faucibus
                uspendisse porta.
              </CarouselText>
            </CarouselTextContainer>
          </CarouselContainer>
        </SliderTeste>
      </ImageContainer>
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
