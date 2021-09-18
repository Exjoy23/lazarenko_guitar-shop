import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DATABASE_URL } from '../../const';

const initialState = {
  guitars: [],
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
  name: 'data',
  initialState,
  extraReducers: {
    [loadGuitars.fulfilled]: (state, { payload }) => {
      state.guitars = payload;
    },
  },
});

export const { addGuitars } = dataSlice.actions;
export default dataSlice.reducer;
