import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GuitarTypes, SCROLL_HIDE_STYLE } from '../../const';
import { divideNumberByPieces, getNumber } from '../../utils';
import styles from './basket-item.module.scss';
import { Modal } from '../modal/modal';

const MIN_VALUE = 1;
const STEP = 1;

function BasketItem({ id, type, strings, name, cartPreview, price, quantity }) {
  const [count, setCount] = useState(quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onInputChange = (evt) => {
    const value = getNumber(evt.target.value);

    if (value < MIN_VALUE) {
      return setCount(MIN_VALUE);
    }

    setCount(value);
  };

  const reduceValue = () => {
    setCount((state) => {
      if (state === MIN_VALUE) {
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
        />
        <button
          className={styles.increment}
          onClick={increaseValue}
          type="button"
          aria-label="увеличить количество гитар"
        />
      </div>
      <div className={classNames(styles.price, styles.price_all)}>
        {divideNumberByPieces(price * count)} ₽
      </div>
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
