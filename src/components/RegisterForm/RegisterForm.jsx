import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import {
  StyledForm,
  StyledFormField,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
} from 'components/CommonStyles/CommonStyles.styled';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(nameRegex, {
      message:
        "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
    })
    .required('Name is a required field'),

  email: Yup.string()
    .trim()
    .matches(emailRegex, {
      message: 'Email is invalid.',
    })
    .required('Email is a required field'),

  password: Yup.string().trim().min(7).required('Password is a required field'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledFormField>
          <StyledLabel>Name</StyledLabel>
          <StyledInput type="text" name="name" />
          <StyledErrorMessage name="name" component="div" />
        </StyledFormField>

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

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
};
