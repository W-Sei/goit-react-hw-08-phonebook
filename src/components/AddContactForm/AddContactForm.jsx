import React from 'react';
import { Formik } from 'formik';
import Notiflix from 'notiflix';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts, selectError } from '../../redux/selectors';

import {
  FormSection,
  AddNumberInput,
  Button,
  InputTitle,
  ErrorMes,
} from './AddContactForm.styled';

const userSchema = object({
  name: string().required(),
  phone: string().required().min(5).max(20),
});

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  function handleSubmit(values, { resetForm }) {
    const isName = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isName) {
      Notiflix.Notify.info(`${values.nameContact} is already in your contacts`);
      return;
    } else {
      dispatch(addContact(values));
      resetForm();
    }
  }

  if (error) {
    Notiflix.Notify.failure(`${error} occured.`);
  }

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormSection>
        <InputTitle>Name</InputTitle>
        <AddNumberInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMes name="name" component="div" />
        <InputTitle>Number</InputTitle>
        <AddNumberInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMes name="phone" component="div" />
        <Button type="submit">Add contact</Button>
      </FormSection>
    </Formik>
  );
};

