import { GUITAR_STRINGS, GUITAR_TYPES, SortingOrders } from './const';

export const divideNumberByPieces = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const filterByPrice = (item, priceFrom, priceTo) => {
  const itemPriceFrom = priceFrom ? item.price >= +priceFrom : true;
  const itemPriceTo = priceTo ? item.price <= +priceTo : true;

  return itemPriceFrom && itemPriceTo;
};

export const filterByType = (item, types) => {
  const productTypes = types.length ? types : GUITAR_TYPES;

  return productTypes.some((type) => type === item.type);
};

export const filterByStrings = (item, strings) => {
  const productStrings = strings.length ? strings : GUITAR_STRINGS;

  return productStrings.some((string) => string === item.strings);
};

export const filterProducts = (products, priceFrom, priceTo, types, strings) =>
  products.filter(
    (item) =>
      filterByPrice(item, priceFrom, priceTo) &&
      filterByType(item, types) &&
      filterByStrings(item, strings),
  );

export const sortProducts = (products, type, order) => {
  if (!type || !order) {
    return products;
  }

  return products
    .slice()
    .sort((a, b) =>
      order === SortingOrders.ASCENDING ? a[type] - b[type] : b[type] - a[type],
    );
};
