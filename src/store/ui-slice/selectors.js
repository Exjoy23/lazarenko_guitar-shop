import { NameSpace } from '../../const';

export const getSortingType = (state) => state[NameSpace.UI].sorting.type;
export const getSortingOrder = (state) => state[NameSpace.UI].sorting.order;
export const getFilteringPriceFrom = (state) =>
  state[NameSpace.UI].filtering.price.from;
export const getFilteringPriceTo = (state) =>
  state[NameSpace.UI].filtering.price.to;
export const getFilteringTypes = (state) => state[NameSpace.UI].filtering.types;
export const getFilteringStrings = (state) =>
  state[NameSpace.UI].filtering.strings;
