import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm } from './PhonebookForm.styled';

const PhonebookForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const telId = nanoid();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactData = {
      id: nanoid(),
      name: name,
      number: number,
    };

    onSubmit(contactData);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2 className="form-title">Phonebook</h2>
      <label className="form-label" htmlFor="nameId">
        <span className="form-label_name">Name:</span>
        <input
          className="input-form"
          type="text"
          name="name"
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          placeholder="Add name to phonebook"
          required
        />
      </label>
      <label className="form-label" htmlFor="telId">
        <span className="form-label_name">Number</span>
        <input
          className="input-form"
          type="tel"
          name="number"
          id={telId}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          placeholder="Add a phone number"
          required
        />
      </label>
      <button type="submit" className="form-btn">
        Add contact
      </button>
    </StyledForm>
  );
};

export default PhonebookForm;
