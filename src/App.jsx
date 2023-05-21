import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function App() {
 
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm onAddContact={addContact} /> */}
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <Filter />
      <ContactList
      // contacts={filteredContacts}
      // onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
