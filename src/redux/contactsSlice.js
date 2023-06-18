import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  removeContactThunk,
  addContactThunk,
  fetchContactsThunk,
} from './operation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: '',
  },

  extraReducers: buider =>
    buider
      .addCase(fetchContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(removeContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),

  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.push(action.payload);
  //   },
  //   removeContact: (state, action) => {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
// export const { addContact, removeContact } = contactsSlice.actions;
