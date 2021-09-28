import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GuitarTypes, SCROLL_HIDE_STYLE } from '../../const';
import { divideNumberByPieces, getNumber } from '../../utils';
import styles from './basket-item.module.scss';
import { Modal } from '../modal/modal';
import { changeQuantityGuitars } from '../../store/data-slice/data-slice';

const MIN_VALUE = 1;
const STEP = 1;

function BasketItem({ id, type, strings, name, cartPreview, price, quantity }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (count) {
      dispatch(changeQuantityGuitars({ id, count }));
    }
  }, [dispatch, count, id]);

  const onInputChange = (evt) => {
    const value = getNumber(evt.target.value);

    if (!value) {
      return setCount('');
    }

    setCount(value);
  };

  const onInputBlur = (evt) => {
    const value = getNumber(evt.target.value);

    if (value < MIN_VALUE) {
      return setCount(MIN_VALUE);
    }
  };

  const reduceValue = () => {
    setCount((state) => {
      if (state === MIN_VALUE) {
        setIsModalOpen(true);
        document.body.style = SCROLL_HIDE_STYLE;

        return state;
      }

      return state - STEP;
    });
  };

  const increaseValue = () => {
    setCount((state) => state + STEP);
  };

  return (
    <li className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          setIsModalOpen(true);
          document.body.style = SCROLL_HIDE_STYLE;
        }}
        aria-label="Удалить все гитары из корзины"
      />
      <img src={cartPreview} width="60" height="136" alt="басс-гитара" />
      <div>
        <h2 className={styles.title}>Гитара {name}</h2>
        <p className={styles.text}>Артикул: {id}</p>
        <p className={styles.text}>
          {GuitarTypes[type]}, {strings} струнная{' '}
        </p>
      </div>
      <div className={styles.price}>{divideNumberByPieces(price)} ₽</div>
      <div className={styles.quantity}>
        <button
          className={styles.decrement}
          onClick={reduceValue}
          type="button"
          aria-label="уменьшить количество гитар"
        />
        <input
          className={styles.count}
          type="text"
          value={count}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        <button
          className={styles.increment}
          onClick={increaseValue}
          type="button"
          aria-label="увеличить количество гитар"
        />
      </div>
      <div className={classNames(styles.price, styles.price_all)}>
        {divideNumberByPieces(price * (count ? count : MIN_VALUE))} ₽
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
          id={id}
          strings={strings}
          type={type}
          name={name}
          cartPreview={cartPreview}
          price={price}
          secondary
        />
      )}
    </li>
  );
}

BasketItem.propTypes = {
  id: PropTypes.string.isRequired,
  strings: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cartPreview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export { BasketItem };
