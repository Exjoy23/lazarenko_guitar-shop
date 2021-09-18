import React from 'react';
import styles from './card-list.module.scss';
import { CardItem } from '../card-item/card-item';
import { useSelector } from 'react-redux';

function CardList() {
  const guitars = useSelector(({ dataSlice }) => dataSlice.guitars);

  return (
    <ul className={styles.list}>
      {guitars && guitars.map((item) => <CardItem key={item.id} {...item} />)}
    </ul>
  );
}

export { CardList };
