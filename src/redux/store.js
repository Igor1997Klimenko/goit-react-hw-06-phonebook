/* eslint-disable import/no-anonymous-default-export */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { toogleContacts } from './toogleContacts';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
}
const rootReducer = combineReducers({
  contacts: toogleContacts.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store);

export default { store, persistor };
