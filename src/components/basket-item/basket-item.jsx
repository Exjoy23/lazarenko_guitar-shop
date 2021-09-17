import React from 'react';
import classNames from 'classnames';
import styles from './basket-item.module.scss';
import guitar from './bass-guitar-mini.png';

function BasketItem() {
  return (
    <li className={styles.wrapper}>
      <button
        className={styles.button}
        aria-label="Удалить все гитары из корзины"
      />
      <img src={guitar} width="60" height="136" alt="басс-гитара" />
      <div>
        <h2 className={styles.title}>ЭлектроГитара Честер bass</h2>
        <p className={styles.text}>Артикул: SO757575</p>
        <p className={styles.text}>Электрогитара, 6 струнная </p>
      </div>
      <div className={styles.price}>17 500 ₽</div>
      <div className={styles.quantity}>
        <button
          className={styles.decrement}
          type="button"
          aria-label="уменьшить количество гитар"
        />
        <span className={styles.count}>1</span>
        <button
          className={styles.increment}
          type="button"
          aria-label="увеличить количество гитар"
        />
      </div>
      <div className={classNames(styles.price, styles.price_all)}>17 500 ₽</div>
    </li>
  );
}

export { BasketItem };
