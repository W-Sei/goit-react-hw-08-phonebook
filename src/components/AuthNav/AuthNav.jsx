import {
  LinkWrapper,
  StyledNavLink,
} from 'components/CommonStyles/CommonStyles.styled';

export const AuthNav = () => {
  return (
    <LinkWrapper>
      <li>
        <StyledNavLink to="/register">Register</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/login">Log in</StyledNavLink>
      </li>
    </LinkWrapper>
  );
};
