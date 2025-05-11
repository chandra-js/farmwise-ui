import { configureStore } from '@reduxjs/toolkit';
import constantsReducer from './constantsSlice';

const store = configureStore({
  reducer: {
    constants: constantsReducer,
  },
});

export default store; 