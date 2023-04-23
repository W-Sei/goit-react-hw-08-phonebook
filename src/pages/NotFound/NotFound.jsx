import { Link } from 'react-router-dom';
import { StyledNotFound } from './NotFound.styled';

const NotFound = () => {
  return (
    <StyledNotFound>
      No such page, please, go to <Link to="/">My Phonebook</Link>
    </StyledNotFound>
  );
};
export default NotFound;
