import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DATABASE_URL } from '../../const';

const initialState = {
  guitars: [],
  cartGuitars: [],
  isLoading: false,
};

export const loadGuitars = createAsyncThunk('data/loadGuitars', async () => {
  try {
    const response = await axios.get(DATABASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    addToCartGuitar(state, { payload }) {
      state.cartGuitars.push(payload);
    },
  },
  extraReducers: {
    [loadGuitars.pending]: (state) => {
      state.isLoading = true;
    },
    [loadGuitars.fulfilled]: (state, { payload }) => {
      state.guitars = payload;
      state.isLoading = false;
    },
    [loadGuitars.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addToCartGuitar } = dataSlice.actions;
export default dataSlice.reducer;
