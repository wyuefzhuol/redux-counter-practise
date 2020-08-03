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
    },

    handleIncrease: state => {
      state.totalNumber += 1
    },

    handleDecrease: state => {
      state.totalNumber = state.totalNumber - 1
    },

    handleIncreaseTen: state => {
      state.totalNumber += 10
    },

    handleMakeZero: (state, action) => {
      state.totalNumber = state.totalNumber - action.payload
    },
  },
});

export const { handleResize, handleIncrease, handleDecrease, handleIncreaseTen, handleMakeZero } = counterGroupSlice.actions;

export const groupSize = state => state.counterGroup.size;

export const totalNumber = state => state.counterGroup.totalNumber;

export default counterGroupSlice.reducer;
