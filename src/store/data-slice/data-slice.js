import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DATABASE_URL, QUANTITY } from '../../const';

const initialState = {
  guitars: [],
  cartGuitars: [],
  isLoading: false,
  promoCode: '',
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
      const guitar = state.cartGuitars.find((item) => item.id === payload.id);

      if (guitar) {
        guitar.quantity = guitar.quantity + QUANTITY;
      } else {
        state.cartGuitars.push(payload);
      }
    },
    removeFromCartGuitar(state, { payload }) {
      const guitarIndex = state.cartGuitars.findIndex(
        (item) => item.id === payload,
      );

      state.cartGuitars.splice(guitarIndex, QUANTITY);
    },
    changeQuantityGuitars(state, { payload }) {
      const guitar = state.cartGuitars.find((item) => item.id === payload.id);

      guitar.quantity = payload.count;
    },
    changePromoCode(state, { payload }) {
      state.promoCode = payload;
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

export const {
  addToCartGuitar,
  removeFromCartGuitar,
  changeQuantityGuitars,
  changePromoCode,
} = dataSlice.actions;
export default dataSlice.reducer;
