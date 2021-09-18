import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortingType: '',
  sortingOrder: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeSortingType(state, { payload }) {
      state.sortingType = payload;
    },
    changeSortingOrder(state, { payload }) {
      state.sortingOrder = payload;
    },
  },
});

export const { changeSortingType, changeSortingOrder } = dataSlice.actions;
export default dataSlice.reducer;
