import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';

import {
  StyledForm,
  StyledFormField,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
} from 'components/CommonStyles/CommonStyles.styled';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(emailRegex, {
      message: 'Email is invalid.',
    })
    .required('Email is a required field'),

  password: Yup.string().trim().required('Password is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledFormField>
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="email" name="email" />
          <StyledErrorMessage name="email" component="div" />
        </StyledFormField>

        <StyledFormField>
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="password" name="password" />
          <StyledErrorMessage name="password" component="div" />
        </StyledFormField>

        <StyledButton type="submit">Log in</StyledButton>
      </StyledForm>
    </Formik>
  );
};
