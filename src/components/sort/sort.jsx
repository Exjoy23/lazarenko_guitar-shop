import classNames from 'classnames';
import React from 'react';
import styles from './sort.module.scss';

function Sort() {
  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>Сортировать:</p>
      <ul className={styles.list}>
        <li>
          <button className={styles.button}>по цене</button>
        </li>
        <li>
          <button className={styles.button}>по популярности</button>
        </li>
      </ul>
      <ul className={classNames(styles.list, styles.arrows)}>
        <li>
          <button
            className={classNames(styles.button, styles.button_ascending)}
            aria-label="по возрастанию "
          />
        </li>
        <li>
          <button
            className={classNames(styles.button, styles.button_descending)}
            aria-label="по убыванию"
          />
        </li>
      </ul>
    </section>
  );
}

export { Sort };
