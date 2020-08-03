import { createSlice } from '@reduxjs/toolkit';

export const counterGroupSlice = createSlice({
  name: 'counterGroup',
  initialState: {
    size: 0,
    totalNumber: 0
  },
  reducers: {
    handleResize: (state, action) => {
      state.size = action.payload
    }
  },
});

export const { handleResize } = counterGroupSlice.actions;

export const groupSize = state => state.counterGroup.size;

export const totalNumber = state => state.counterGroup.totalNumber;

export default counterGroupSlice.reducer;
