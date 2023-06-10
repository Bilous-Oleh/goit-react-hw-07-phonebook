import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedFilterReducer } from './filterSlice';
import { persistedContactsReducer } from './contactsSlice';
import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  contacts: persistedContactsReducer,
  filter: persistedFilterReducer,
};

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
