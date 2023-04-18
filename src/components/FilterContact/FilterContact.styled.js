import styled from 'styled-components';
import image from '../../images/wp7606734.webp';

export const ContactsInput = styled.input`
  height: 35px;
  width: 250px;
  background-image: url(${image});
  border: 1px transparent;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  transition: all 0.3s ease;
  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const LabelTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  margin-right: 15px;
`;

export const NameInputWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 20px;
  border: 1px transparent;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 15px;
  background-color: rgba(225, 203, 173, 0.56);
`;
