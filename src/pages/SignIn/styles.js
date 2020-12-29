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
  width: 50%;
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
  margin-bottom: 25px;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #707070;
    margin-bottom: 75px;
    font: normal normal normal 30px/38px Muli;
    font-size: 30px;
    opacity: 1;
    padding: 15px 30px 0px 30px;
  }

  p {
    color: #707070;
    font-size: 14px;
    font: normal normal normal 14px/18px Muli;
    margin: 10px 0px 5px 0px;
    align-self: flex-start;
  }

  input {
    flex: 1;
    display: flex;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid grey;
    background: #eee;
    width: 100%;
    padding: 0px 0px 5px 15px;
    font: normal normal normal 16px/20px Muli;
  }

  small {
    font-size: 14px;
    color: #707070;
    align-self: flex-end;
    margin-top: 12px;
    font-family: normal normal normal 14px/18px Muli;
  }

  button {
    background: #707070;
    margin-top: 30px;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 45px;
  }
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
    background: #707070;
    display: flex;
    width: 100%;
  }

  p {
    font-size: 14px;
    color: #707070;
    margin: 0px 10px 0px 10px;
    font-family: normal normal normal 14px/18px Muli;
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
    color: #a9c5ba;
    font-size: 14px;
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
