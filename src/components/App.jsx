import React from 'react';
import { GlobalStyle } from 'GlobalStyles.styled';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { FilterContact } from './FilterContact/FilterContact';
import { ContactsList } from './ContactsList/ContactsList';

import { Wrapper } from './Wrapper/Wrapper.styled';
import { TitleContact, TitleMain } from './Title/Title.styled';
import { ContactsWrapper } from './Wrapper/ContactsWrapper.styled';

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <TitleMain>Phonebook</TitleMain>
      <AddContactForm />

      <ContactsWrapper>
        <TitleContact>Contacts</TitleContact>
        <FilterContact />
        <ContactsList />
      </ContactsWrapper>
    </Wrapper>
  );
};
