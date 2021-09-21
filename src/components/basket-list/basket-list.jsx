import React from 'react';
import PropTypes from 'prop-types';
import styles from './basket-list.module.scss';
import { BasketItem } from '../basket-item/basket-item';

function BasketList({ guitars }) {
  return (
    <ul className={styles.list}>
      {(guitars &&
        guitars.length &&
        guitars.map((item) => <BasketItem key={item.id} {...item} />)) || (
        <li className={styles.text}>В корзине пока ничего нет &#128543;</li>
      )}
    </ul>
  );
}

BasketList.propTypes = {
  guitars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      strings: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      cartPreview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export { BasketList };
