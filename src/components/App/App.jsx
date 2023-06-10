import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from 'redux/contactsSlice';
import { Filter } from 'components/Filter/Filter';
import { setFilter } from 'redux/filterSlice';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const handleAddContact = contactData => {
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
    dispatch(addContact(contactData));
  };

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };

  const handleFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const filteredContacts = getFilteredContact();

  return (
    <div>
      <PhonebookForm onSubmit={handleAddContact}></PhonebookForm>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDelete={handleDeleteContact}
      ></ContactList>
      <ToastContainer />
    </div>
  );
};

export default App;
