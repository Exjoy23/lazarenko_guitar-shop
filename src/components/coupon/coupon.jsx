import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './coupon.module.scss';
import { PromoCodes } from '../../const';
import { changePromoCode } from '../../store/data-slice/data-slice';
import { Button } from '../button/button';

function Coupon() {
  const dispatch = useDispatch();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoCodeError, setIsPromoCodeError] = useState(false);

  const onButtonClick = () => {
    const isActualPromoCode = Object.keys(PromoCodes).some(
      (item) => item === promoCode,
    );

    if (isActualPromoCode) {
      setIsPromoCodeError(false);
      return dispatch(changePromoCode(promoCode));
    }

    return setIsPromoCodeError(true);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Промокод на скидку</h3>
      <p className={styles.text}>Введите свой промокод, если он у вас есть.</p>
      <label className={styles.label}>
        {isPromoCodeError && (
          <p className={styles.error}>Промокод не действителен</p>
        )}
        <input
          className={styles.input}
          onChange={(evt) => setPromoCode(evt.target.value)}
          value={promoCode}
          type="text"
          aria-label="Поле ввода промокода"
        />
      </label>
      <Button className={styles.button} onClick={onButtonClick}>
        Применить купон
      </Button>
    </div>
  );
}

export { Coupon };
