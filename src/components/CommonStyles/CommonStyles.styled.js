import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { Form, Field, ErrorMessage } from 'formik';

export const CommonStyledHeader = styled.header`
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  border-bottom: 1px solid #f2d2bd;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.spacing(1)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  text-transform: uppercase;

  transition-property: color, background-color;
  transition: color ${({ theme }) => theme.transition},
    background-color ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.buttonTextColor};
  border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
  border-radius: ${({ theme }) => theme.spacing(2)};
  transition-property: color, background-color, box-shadow;
  transition: ${({ theme }) =>
    `background-color ${theme.transition}, color ${theme.transition}, box-shadow ${theme.transition}`};

  :hover,
  :focus {
    outline: none;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

export const StyledForm = styled(Form)`
  width: 400px;
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(3)};
  border: ${({ theme }) =>
    `1px solid ${theme.colors.backgroundAndBorderColor}`};
  border-radius: ${({ theme }) => theme.spacing(2)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StyledFormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const StyledButton = styled(Button)`
  max-width: 152px;
  margin: auto;
  padding: 8px 15px;
  font-weight: 500;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const StyledInput = styled(Field)`
  padding: 8px 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.borderInputColor}`};
  border-radius: ${({ theme }) => theme.spacing(2)};
  transition-property: border;
  transition: ${({ theme }) => `border ${theme.transition}`};

  :focus {
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.colors.accentColor}`};
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #dc143c;
`;
