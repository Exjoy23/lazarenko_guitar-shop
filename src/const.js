export const AppRoute = {
  MAIN: '/',
  CART: '/cart',
};

export const DATABASE_URL =
  'https://guitar-shop-23-default-rtdb.europe-west1.firebasedatabase.app/guitars.json';

export const SortingTypes = {
  PRICE: 'price',
  POPULAR: 'reviews',
};

export const SortingOrders = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

export const NameSpace = {
  DATA: 'dataSlice',
  UI: 'uiSlice',
};

export const GUITAR_TYPES = ['ACOUSTIC', 'ELECTRIC', 'UKULELE'];

export const GUITAR_STRINGS = [4, 6, 7, 12];

export const GuitarsType = {
  ACOUSTIC: 'Акустические гитары',
  ELECTRIC: 'Электрогитары',
  UKULELE: 'Укулеле',
};

export const MAX_GUITARS_ON_PAGE = 9;
export const DEFAULT_PAGE = 1;

export const SCROLL_HIDE_STYLE = 'overflow: hidden';
export const SCROLL_VISIBLE_STYLE = 'overflow: visible';
