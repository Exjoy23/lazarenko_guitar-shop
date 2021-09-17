import React from 'react';
import styles from './basket-list.module.scss';
import { BasketItem } from '../basket-item/basket-item';

function BasketList() {
  return (
    <ul className={styles.list}>
      {Array(2)
        .fill('')
        .map((item) => (
          <BasketItem />
        ))}
    </ul>
  );
}

export { BasketList };
