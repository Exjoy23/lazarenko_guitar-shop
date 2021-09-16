import React from 'react';
import styles from './filter.module.scss';
import { Checkbox } from '../checkbox/checkbox';

function Filter() {
  return (
    <section>
      <h2 className={styles.title}>Фильтр</h2>
      <form>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Цена, ₽</legend>
          <div className={styles.inner}>
            <label>
              <input
                className={styles.input}
                type="number"
                placeholder="1 000"
                aria-label="Цена от"
              />
            </label>
            <label>
              <input
                className={styles.input}
                type="number"
                placeholder="30 000"
                aria-label="Цена до"
              />
            </label>
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Тип гитар</legend>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Checkbox>Акустические гитары</Checkbox>
            </li>
            <li className={styles.item}>
              <Checkbox>Электрогитары</Checkbox>
            </li>
            <li className={styles.item}>
              <Checkbox>Укулеле</Checkbox>
            </li>
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Количество струн</legend>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Checkbox>4</Checkbox>
            </li>
            <li className={styles.item}>
              <Checkbox>6</Checkbox>
            </li>
            <li className={styles.item}>
              <Checkbox>7</Checkbox>
            </li>
            <li className={styles.item}>
              <Checkbox>12</Checkbox>
            </li>
          </ul>
        </fieldset>
      </form>
    </section>
  );
}

export { Filter };
