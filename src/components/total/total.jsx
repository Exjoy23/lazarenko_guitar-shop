import React from 'react';
import styles from './total.module.scss';
import { Button } from '../button/button';

function Total() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Всего: 47 000 ₽ </p>
      <Button className={styles.button} primary>
        Оформить заказ
      </Button>
    </div>
  );
}

export { Total };
