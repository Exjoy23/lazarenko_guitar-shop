import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  guitars: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addGuitars(state, { payload }) {
      state.guitars = payload;
    },
  },
});

export const { addGuitars } = dataSlice.actions;
export default dataSlice.reducer;
