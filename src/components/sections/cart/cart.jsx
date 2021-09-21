import React from 'react';
import { useSelector } from 'react-redux';
import styles from './cart.module.scss';
import { BasketList } from '../../basket-list/basket-list';
import { Coupon } from '../../coupon/coupon';
import { Total } from '../../total/total';

import { getCartGuitars } from '../../../store/data-slice/selectors';

function Cart() {
  const cartGuitars = useSelector(getCartGuitars);

  return (
    <section className={styles.section}>
      <h2 className="visually-hidden">Корзина гитар</h2>
      <BasketList guitars={cartGuitars} />
      <Coupon />
      <Total />
    </section>
  );
}

export { Cart };
