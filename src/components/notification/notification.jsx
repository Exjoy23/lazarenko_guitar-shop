import React from 'react';
import styles from './notification.module.scss';
import guitar from './electric-guitar.png';

function Notification() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={guitar}
        width="190"
        height="68"
        alt=""
      />
      <p className={styles.title}>Таких товаров нет, увы</p>
      <p className={styles.text}>
        Попробуйте смягчить условия поиска — то, что вам нужно, наверняка
        найдётся
      </p>
    </div>
  );
}

export { Notification };
