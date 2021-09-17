import classNames from 'classnames';
import React from 'react';
import styles from './pagination.module.scss';

function Pagination() {
  return (
    <div className={styles.wrapper}>
      <button
        className={classNames(styles.button, styles.button_active)}
        type="button"
      >
        1
      </button>
      <button className={styles.button} type="button">
        2
      </button>
      <button className={styles.button} type="button">
        ...
      </button>
      <button className={styles.button} type="button">
        7
      </button>
      <button
        className={classNames(styles.button, styles.button_next)}
        type="button"
      >
        Далее
      </button>
    </div>
  );
}

export { Pagination };
