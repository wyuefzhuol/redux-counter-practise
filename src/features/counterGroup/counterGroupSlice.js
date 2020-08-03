import { createSlice } from '@reduxjs/toolkit';

export const counterGroupSlice = createSlice({
  name: 'counterGroup',
  initialState: {
    size: 0,
    totalNumber: 0
  },
  reducers: {

  },
});

export const {  } = counterGroupSlice.actions;

export default counterGroupSlice.reducer;
