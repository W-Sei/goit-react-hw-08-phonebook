import styled from 'styled-components';
import imageButton from '../../images/button.png';

export const List = styled.ul`
  margin-right: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  background-color: rgba(225, 203, 173, 0.56);
  border: transparent;
  border-radius: 5px;
  width: 350px;
  padding: 4px;
  padding-left: 7px;
  padding-right: 7px;
`;

export const Button = styled.button`
  border: 1px solid grey;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
  font-weight: 600;
  background-image: url(${imageButton});
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s ease;
  :hover,
  :focus {
    background-color: #f7e2b2;
    border: 1px solid black;
    color: black;
    font-weight: 700;
    transform: scale(1.2);
  }
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
