import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import image from '../../images/wp7606734.webp';
import imageButton from '../../images/button.png';

export const FormSection = styled(Form)`
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: rgba(225, 203, 173, 0.56);
  border: 1px transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
`;

export const AddNumberInput = styled(Field)`
  height: 35px;
  width: 350px;
  margin: 10px;
  background-image: url(${image});
  border: 1px transparent;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const Button = styled.button`
  width: 175px;
  height: 35px;
  margin-top: 20px;
  font-weight: 700;
  background-image: url(${imageButton});
  border-radius: 10px;
  border: 1px solid grey;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  transition: all 0.3s ease;
  :hover,
  :focus {
    background-color: #f7e2b2;
    border: 1px solid black;
    color: black;
    transform: scale(1.1);
  }
`;

export const InputTitle = styled.h3`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 26px;
  margin-top: 10px;
`;

export const ErrorMes = styled(ErrorMessage)`
  color: #ff0000;
  margin-bottom: 8px;
  font-weight: 100;
  font-size: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: end;
`;
