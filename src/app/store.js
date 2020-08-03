import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import counterGroupReducer from '../features/counterGroup/counterGroupSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    counterGroup: counterGroupReducer,
  },
});
