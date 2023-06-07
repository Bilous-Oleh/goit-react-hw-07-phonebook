import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contactData => {
    if (contacts.some(contact => contact.name === contactData.name)) {
      toast.error(`Contact with ${contactData.name} already exists`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return;
    }
    setContacts(contacts => [...contacts, contactData]);
  };

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterdContacts = getFilteredContact();

  return (
    <div>
      <PhonebookForm onSubmit={addContact}></PhonebookForm>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        contacts={filterdContacts}
        onDelete={deleteContact}
      ></ContactList>
      <ToastContainer />
    </div>
  );
};

export default App;
