import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSortingOrder,
  changeSortingType
} from '../../store/ui-slice/ui-slice';
import {
  getSortingOrder,
  getSortingType
} from '../../store/ui-slice/selectors';
import styles from './sort.module.scss';
import { SortingOrders, SortingTypes } from '../../const';

function Sort() {
  const dispatch = useDispatch();
  const sortingType = useSelector(getSortingType);
  const sortingOrder = useSelector(getSortingOrder);

  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>Сортировать:</p>
      <ul className={styles.list}>
        <li>
          <button
            className={styles.button}
            onClick={() => {
              if (!sortingOrder) {
                dispatch(changeSortingOrder(SortingOrders.ASCENDING));
              }

              dispatch(changeSortingType(SortingTypes.PRICE));
            }}
            type="button"
            disabled={sortingType === SortingTypes.PRICE}
          >
            по цене
          </button>
        </li>
        <li>
          <button
            className={styles.button}
            onClick={() => {
              if (!sortingOrder) {
                dispatch(changeSortingOrder(SortingOrders.ASCENDING));
              }

              dispatch(changeSortingType(SortingTypes.POPULAR));
            }}
            type="button"
            disabled={sortingType === SortingTypes.POPULAR}
          >
            по популярности
          </button>
        </li>
      </ul>
      <ul className={classNames(styles.list, styles.arrows)}>
        <li>
          <button
            className={classNames(styles.button, styles.button_ascending)}
            onClick={() => {
              if (!sortingType) {
                dispatch(changeSortingType(SortingTypes.PRICE));
              }

              dispatch(changeSortingOrder(SortingOrders.ASCENDING));
            }}
            type="button"
            aria-label="по возрастанию"
            disabled={sortingOrder === SortingOrders.ASCENDING}
          />
        </li>
        <li>
          <button
            className={classNames(styles.button, styles.button_descending)}
            onClick={() => {
              if (!sortingType) {
                dispatch(changeSortingType(SortingTypes.PRICE));
              }

              dispatch(changeSortingOrder(SortingOrders.DESCENDING));
            }}
            type="button"
            aria-label="по убыванию"
            disabled={sortingOrder === SortingOrders.DESCENDING}
          />
        </li>
      </ul>
    </section>
  );
}

export { Sort };
