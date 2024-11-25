import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage for web
import storeReducer from './storeSlice';

// Redux Persist configuration
const persistConfig = {
  key: 'root', // The key to store the persisted data under
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, storeReducer);

export const store = configureStore({
  reducer: {
    store: persistedReducer, // Use the persisted reducer here
  },
});

export const persistor = persistStore(store);
