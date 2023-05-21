import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Container, Button } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const contactItems = useSelector(state => state.contacts.items);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  // const filteredContacts = useSelector(state => {
  //   const normalizedFilter = state.filters.toLowerCase();

  //   return state.contacts.items.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // });

  return (
    <Container>
      {contactItems.map(({ name, number, id }) => (
        <li key={id}>
          {`${name}: ${number}`}
          <Button onClick={() => handleDeleteContact(id)}>Delete</Button>
        </li>
      ))}
    </Container>
  );
}
