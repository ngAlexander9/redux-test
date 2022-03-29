import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// create and export Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
