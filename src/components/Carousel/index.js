/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  CarouselContainer,
  SliderTeste,
  CarouselImage,
  CarouselTextContainer,
  CarouselImageContainer,
  CarouselHeader,
  CarouselText,
} from './styles';
// import Data from '../../assets/Img/Data.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = (data) => {
  console.log({ data });
  return (
    <SliderTeste {...settings} arrows={false}>
      <CarouselContainer>
        <CarouselImageContainer>
          <CarouselImage src={data.image1} alt={data} />
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
          <CarouselImage src={data.image2} alt={data} />
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
          <CarouselImage src={data.image3} alt={data} />
        </CarouselImageContainer>
        <CarouselTextContainer>
          <CarouselHeader>Marcenas mattis egestas</CarouselHeader>
          <CarouselText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </CarouselText>
        </CarouselTextContainer>
      </CarouselContainer>
      <CarouselContainer>
        <CarouselImageContainer>
          <CarouselImage src={data.image4} alt={data} />
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
  );
};

export default Carousel;
