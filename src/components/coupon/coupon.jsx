import React from 'react';
import styles from './coupon.module.scss';
import { Button } from '../button/button';

function Coupon() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Промокод на скидку</h3>
      <p className={styles.text}>Введите свой промокод, если он у вас есть.</p>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          aria-label="Поле ввода промокода"
        />
      </label>
      <Button className={styles.button}>Применить купон</Button>
    </div>
  );
}

export { Coupon };
