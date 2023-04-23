import PropTypes from 'prop-types';

import { useContacts } from 'hooks';
import { ContactListItem } from './ContactListItem';

import { StyledContacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useContacts();

  return (
    <StyledContacts>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ),
};
