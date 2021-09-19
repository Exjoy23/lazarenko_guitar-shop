import React from 'react';
import PropTypes from 'prop-types';
import styles from './card-list.module.scss';
import { CardItem } from '../card-item/card-item';

function CardList({ guitars }) {
  return (
    <ul className={styles.list}>
      {(guitars &&
        guitars.length &&
        guitars.map((item) => <CardItem key={item.id} {...item} />)) || (
        <div>Товары не найдены</div>
      )}
    </ul>
  );
}

CardList.propTypes = {
  guitars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      reviews: PropTypes.number.isRequired,
      strings: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      preview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export { CardList };
