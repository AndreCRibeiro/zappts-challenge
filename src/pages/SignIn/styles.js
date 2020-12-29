import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex: 1;
  width: 100vw;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background: #a9c5ba;
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  font: normal normal 900 35px/48px Avenir;
  align-self: flex-end;
  margin-bottom: 20px;
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
    width: 100%;
  }

  p {
    color: #707070;
    font-size: 14px;
    font: normal normal normal 14px/18px Muli;
    margin: 10px 0px 5px 0px;
    align-self: flex-start;
  }

  small {
    font-size: 14px;
    color: #707070;
    align-self: flex-end;
    margin-top: 12px;
    font-family: normal normal normal 14px/18px Muli;
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
  font: normal normal normal 16px/20px Muli;
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
  }

  p {
    font-size: 14px;
    color: rgba(112, 112, 112, 0.8);
    margin: 0px 10px 0px 10px;
    font-family: normal normal normal 14px/18px Muli;
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

  img {
    margin: 0px 10px 0px 10px;
  }

  p {
    color: #000;
    margin: 0px 5px 0px 13px;
    font: normal normal normal 18px/22px Lato;
  }
`;

export const BottomContainer = styled.div`
  width: 65%;
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
    font-family: normal normal normal 14px/18px Muli;
  }

  b {
    font-size: 14px;
    color: #707070;
    margin: 0px 3px 0px 3px;
    font-family: normal normal normal 14px/18px Muli;
  }
`;
