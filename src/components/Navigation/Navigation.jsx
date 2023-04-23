import { useAuth } from 'hooks';
import {
  LinkWrapper,
  StyledNavLink,
} from 'components/CommonStyles/CommonStyles.styled';
import { GiRotaryPhone } from 'react-icons/gi';
// GiRotaryPhone

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkWrapper>
        <li>
          <GiRotaryPhone />
        </li>
        <li>
          <StyledNavLink to="/">My Phonebook</StyledNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          </li>
        )}
      </LinkWrapper>
    </nav>
  );
};
