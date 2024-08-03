import { configureStore } from '@reduxjs/toolkit';
import omdbReducer from '../features/omdbSlice';

export const store = configureStore(
  {
    reducer: {
      omdb: omdbReducer,
    },
  },
);