import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './total.module.scss';
import { Button } from '../button/button';
import { getCartGuitars, getPromoCode } from '../../store/data-slice/selectors';
import { divideNumberByPieces, getSumProducts } from '../../utils';
import { ProductKeys, PromoCodes } from '../../const';

const MAX_PERCENT = 100;
const MIN_SUM = 0;
const Discounts = {
  GITARAHIT: 10,
  SUPERGITARA: 700,
  GITARA2020: {
    MIN: 30,
    MAX: 3000,
    BORDER: 10000,
  },
};

function Total() {
  const cartGuitars = useSelector(getCartGuitars);
  const promoCode = useSelector(getPromoCode);
  const [totalSum, setTotalSum] = useState(MIN_SUM);

  useEffect(() => {
    const sum = cartGuitars.length
      ? getSumProducts(cartGuitars, ProductKeys.PRICE)
      : MIN_SUM;

    if (sum && promoCode === PromoCodes.GITARAHIT) {
      setTotalSum(sum - (sum / MAX_PERCENT) * Discounts.GITARAHIT);
    }

    if (sum && promoCode === PromoCodes.SUPERGITARA) {
      setTotalSum(sum - Discounts.SUPERGITARA);
    }

    if (sum && promoCode === PromoCodes.GITARA2020) {
      const discount =
        sum < Discounts.GITARA2020.BORDER
          ? (sum / MAX_PERCENT) * Discounts.GITARA2020.MIN
          : Discounts.GITARA2020.MAX;

      setTotalSum(sum - discount);
    }

    if (!promoCode || !sum) {
      setTotalSum(sum);
    }
  }, [cartGuitars, promoCode]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Всего: {divideNumberByPieces(totalSum)} ₽</p>
      <Button className={styles.button} primary disabled={!cartGuitars.length}>
        Оформить заказ
      </Button>
    </div>
  );
}

export { Total };
