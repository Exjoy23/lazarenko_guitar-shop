import React from 'react';
import styles from './card-list.module.scss';
import { CardItem } from '../card-item/card-item';

function CardList() {
  return (
    <ul className={styles.list}>
      {Array(9)
        .fill('')
        .map((item) => (
          <CardItem />
        ))}
    </ul>
  );
}

export { CardList };
