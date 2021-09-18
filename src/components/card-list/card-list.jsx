import React from 'react';
import styles from './card-list.module.scss';
import { CardItem } from '../card-item/card-item';
import { useSelector } from 'react-redux';
import { SortingOrders } from '../../const';

const sortProducts = (products, type, order) => {
  if (!type || !order) {
    return products;
  }

  return products
    .slice()
    .sort((a, b) =>
      order === SortingOrders.ASCENDING ? a[type] - b[type] : b[type] - a[type],
    );
};

function CardList() {
  const guitars = useSelector(({ dataSlice }) => dataSlice.guitars);
  const sortingType = useSelector(({ uiSlice }) => uiSlice.sortingType);
  const sortingOrder = useSelector(({ uiSlice }) => uiSlice.sortingOrder);

  const sortedGuitars = sortProducts(guitars, sortingType, sortingOrder);

  return (
    <ul className={styles.list}>
      {sortedGuitars &&
        sortedGuitars.map((item) => <CardItem key={item.id} {...item} />)}
    </ul>
  );
}

export { CardList };
