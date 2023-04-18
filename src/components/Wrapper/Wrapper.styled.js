import styled from 'styled-components';
import image from '../../images/wp7606734.webp';

export const Wrapper = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${image});
  max-width: 700px;
  margin: 20px auto;
  border-radius: 20px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;
