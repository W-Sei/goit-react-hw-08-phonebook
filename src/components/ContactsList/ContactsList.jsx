import React, { useEffect } from 'react';
import { List, Item, Button, Name, NameWrapper } from './ContactsList.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';

import {
  selectContacts,
  selectFilter,
  selectLoading,
} from '../../redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const loading = useSelector(selectLoading);

  return (
    <List>
      {loading && <Loader />}
      {filterContact.map(({ name, phone, id }) => (
        <Item key={id}>
          <NameWrapper>
            <Name>{name}</Name>
            <p>{phone}</p>
          </NameWrapper>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
