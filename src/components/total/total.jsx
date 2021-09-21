import React from 'react';
import { useSelector } from 'react-redux';
import styles from './total.module.scss';
import { Button } from '../button/button';
import { getCartGuitars } from '../../store/data-slice/selectors';
import { divideNumberByPieces, getSumProducts } from '../../utils';
import { ProductKeys } from '../../const';

const MIN_SUM = 0;

function Total() {
  const cartGuitars = useSelector(getCartGuitars);

  const totalSum = cartGuitars.length
    ? divideNumberByPieces(getSumProducts(cartGuitars, ProductKeys.PRICE))
    : MIN_SUM;

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Всего: {totalSum} ₽</p>
      <Button className={styles.button} primary disabled={!cartGuitars.length}>
        Оформить заказ
      </Button>
    </div>
  );
}

export { Total };
