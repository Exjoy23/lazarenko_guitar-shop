import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sorting: {
    type: '',
    order: '',
  },
  filtering: {
    price: {
      from: '',
      to: '',
    },
    types: [],
    strings: [],
  },
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    changeSortingType(state, { payload }) {
      state.sorting.type = payload;
    },
    changeSortingOrder(state, { payload }) {
      state.sorting.order = payload;
    },
    changeFilteringPriceFrom(state, { payload }) {
      state.filtering.price.from = payload;
    },
    changeFilteringPriceTo(state, { payload }) {
      state.filtering.price.to = payload;
    },
    changeFilteringTypes(state, { payload }) {
      state.filtering.types = payload;
    },
    changeFilteringStrings(state, { payload }) {
      state.filtering.strings = payload;
    },
  },
});

export const {
  changeSortingType,
  changeSortingOrder,
  changeFilteringPriceFrom,
  changeFilteringPriceTo,
  changeFilteringTypes,
  changeFilteringStrings,
} = uiSlice.actions;
export default uiSlice.reducer;
