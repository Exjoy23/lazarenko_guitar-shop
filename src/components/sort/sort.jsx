import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSortingOrder,
  changeSortingType
} from '../../store/slices/ui-slice';
import styles from './sort.module.scss';
import { SortingOrders, SortingTypes } from '../../const';

function Sort() {
  const dispatch = useDispatch();
  const sortingType = useSelector(({ uiSlice }) => uiSlice.sortingType);
  const sortingOrder = useSelector(({ uiSlice }) => uiSlice.sortingOrder);

  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>Сортировать:</p>
      <ul className={styles.list}>
        <li>
          <button
            className={classNames(
              styles.button,
              sortingType === SortingTypes.PRICE && styles.button_active,
            )}
            onClick={() => {
              if (!sortingOrder) {
                dispatch(changeSortingOrder(SortingOrders.ASCENDING));
              }

              dispatch(changeSortingType(SortingTypes.PRICE));
            }}
            type="button"
          >
            по цене
          </button>
        </li>
        <li>
          <button
            className={classNames(
              styles.button,
              sortingType === SortingTypes.POPULAR && styles.button_active,
            )}
            onClick={() => {
              if (!sortingOrder) {
                dispatch(changeSortingOrder(SortingOrders.ASCENDING));
              }

              dispatch(changeSortingType(SortingTypes.POPULAR));
            }}
            type="button"
          >
            по популярности
          </button>
        </li>
      </ul>
      <ul className={classNames(styles.list, styles.arrows)}>
        <li>
          <button
            className={classNames(
              styles.button,
              styles.button_ascending,
              sortingOrder === SortingOrders.ASCENDING && styles.button_active,
            )}
            onClick={() => {
              if (!sortingType) {
                dispatch(changeSortingType(SortingTypes.PRICE));
              }

              dispatch(changeSortingOrder(SortingOrders.ASCENDING));
            }}
            type="button"
            aria-label="по возрастанию "
          />
        </li>
        <li>
          <button
            className={classNames(
              styles.button,
              styles.button_descending,
              sortingOrder === SortingOrders.DESCENDING && styles.button_active,
            )}
            onClick={() => {
              if (!sortingType) {
                dispatch(changeSortingType(SortingTypes.PRICE));
              }

              dispatch(changeSortingOrder(SortingOrders.DESCENDING));
            }}
            type="button"
            aria-label="по убыванию"
          />
        </li>
      </ul>
    </section>
  );
}

export { Sort };
