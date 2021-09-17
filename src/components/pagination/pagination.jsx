import classNames from 'classnames';
import React from 'react';
import styles from './pagination.module.scss';

function Pagination() {
  return (
    <div className={styles.wrapper}>
      <button className={classNames(styles.button, styles.button_active)}>
        1
      </button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>...</button>
      <button className={styles.button}>7</button>
      <button className={classNames(styles.button, styles.button_next)}>
        Далее
      </button>
    </div>
  );
}

export { Pagination };
