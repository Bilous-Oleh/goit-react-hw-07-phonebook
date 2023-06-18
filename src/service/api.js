// https://648a151e5fa58521cab0c442.mockapi.io

import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get(
    'https://648a151e5fa58521cab0c442.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(
    'https://648a151e5fa58521cab0c442.mockapi.io/contacts/',
    contact
  );
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(
    `https://648a151e5fa58521cab0c442.mockapi.io/contacts/${contactId}`
  );
  return data;
};
