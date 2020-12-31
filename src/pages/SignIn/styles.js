import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: 1224px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background: #a9c5ba;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1224px) {
    width: 100%;
    height: 60vh;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1224px) {
    width: 100%;
    height: 90vh;
  }
`;

export const FormContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #000;
  font-family: Avenir;
  align-self: flex-end;
  margin-bottom: 20px;

  @media only screen and (max-width: 1224px) {
    margin: 10px 0px 5px 0px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #707070;
    margin-bottom: 55px;
    font-family: Muli;
    font-size: 30px;
    opacity: 1;
    padding: 15px 30px 0px 30px;
    text-align: center;
    line-height: 1.1;
  }

  p {
    color: ${(props) => (props.error ? 'red' : '#707070')};
    font-size: 14px;
    font-family: Muli;
    margin: 10px 0px 5px 0px;
    align-self: flex-start;
  }

  small {
    font-size: 14px;
    color: #707070;
    align-self: flex-end;
    margin-top: 12px;
    font-family: Muli;
    cursor: pointer;
  }

  button {
    background: rgba(112, 112, 112, 0.8);
    margin-top: 30px;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 40px;

    &:hover {
      background: rgba(112, 112, 112, 1);
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  display: flex;
  font-size: 16px;
  border: none;
  border-bottom: ${(props) =>
    props.error ? '2px solid red' : '1px solid grey'};
  background: #eee;
  width: 100%;
  padding: 0px 0px 5px 15px;
  font-family: Muli;
`;

export const Text = styled.b`
  color: rgba(255, 0, 0, 0.6);
  font-size: 13px;
  align-self: flex-start;
  padding: 0px 0px 0px 15px;
`;

export const DividerContainer = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 30px 0px 30px 0px;

  div {
    height: 1px;
    background: rgba(112, 112, 112, 0.3);
    display: flex;
    width: 25%;

    @media only screen and (max-width: 1224px) {
      width: 50%;
    }
  }

  p {
    font-size: 14px;
    color: rgba(112, 112, 112, 0.8);
    margin: 0px 10px 0px 10px;
    font-family: Muli;
  }
`;

export const GoogleButton = styled.button.attrs(() => ({
  type: 'submit',
}))`
  background: #eee;
  border: 0;
  padding: 0 15px;
  margin: 0px 0px 3px 10px;
  border-radius: 50px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 1224px) {
    height: 45px;
  }

  img {
    margin: 0px 10px 0px 10px;
  }

  p {
    color: #000;
    margin: 0px 5px 0px 13px;
    font-family: Lato;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 30px 0px 30px 0px;

  a {
    color: rgba(169, 197, 186, 0.8);
    font-size: 14px;

    &:hover {
      color: rgba(169, 197, 186, 1);
    }
  }

  p {
    font-size: 14px;
    color: #707070;
    font-family: Muli;
  }

  b {
    font-size: 14px;
    color: #707070;
    margin: 0px 3px 0px 3px;
    font-family: Muli;
  }
`;
