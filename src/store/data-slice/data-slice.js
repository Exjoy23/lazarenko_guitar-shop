import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DATABASE_URL } from '../../const';

const initialState = {
  guitars: [],
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

export const { addGuitars } = dataSlice.actions;
export default dataSlice.reducer;
