import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  ContainerForm,
  Container,
  Label,
  Input,
  Button,
} from './ContactForm.styled';
import PropTypes from 'prop-types';

export default function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = () => {
    const id = nanoid();

    if (name !== '' && number !== '') {
      const newContact = { id, name, number };
      onAddContact(newContact);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContainerForm>
      <Container>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
      </Container>
      <Container>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>
      </Container>
      <Button type="button" onClick={addContact}>
        Add contact
      </Button>
    </ContainerForm>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
