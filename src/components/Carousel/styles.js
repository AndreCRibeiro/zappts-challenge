import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderTeste = styled(Slider)`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1224px) {
    height: 100%;
  }

  .slick-dots {
    display: flex;
    justify-content: center;

    margin: 0;
    padding: 0.5rem 0;

    list-style-type: none;

    @media only screen and (max-width: 1224px) {
      padding: 3rem 0;
    }

    li {
      margin: 0 0.2rem;
    }

    button {
      display: block;
      width: 0.65rem;
      height: 0.65rem;
      padding: 0;

      border: none;
      border-radius: 100%;
      background-color: rgba(255, 255, 255, 0.6);

      text-indent: -9999px;
    }

    li.slick-active button {
      background-color: #fff;
      width: 0.7rem;
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CarouselImage = styled.img`
  height: 555px;

  @media only screen and (max-width: 1224px) {
    height: 180px;
  }
`;

export const CarouselTextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;

  @media only screen and (max-width: 1224px) {
    margin-top: 3px;
  }
`;

export const CarouselHeader = styled.p`
  color: #fff;
  font-family: Muli;
  font-size: 30px;
  margin-top: 25px;

  @media only screen and (max-width: 1224px) {
    font-size: 20px;
    margin-top: 15px;
  }
`;

export const CarouselText = styled.small`
  color: #fff;
  font-family: Muli;
  font-size: 17px;
  text-align: center;
  margin-top: 25px;
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 1224px) {
    font-size: 15px;
    margin-top: 8px;
    width: 80%;
  }
`;
