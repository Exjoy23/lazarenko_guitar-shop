import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import styles from './card-item.module.scss';
import { Button } from '../button/button';
import { divideNumberByPieces } from '../../utils';

function CardItem({ name, preview, price, rating, reviews }) {
  return (
    <li className={styles.wrapper}>
      <img
        className={styles.image}
        src={preview}
        width="68"
        height="190"
        alt={name}
      />
      <StarRatings
        rating={rating}
        starRatedColor="#FFD168"
        numberOfStars={5}
        starDimension="12px"
        starSpacing="1px"
      />
      <span className={styles.reviews}>{reviews}</span>
      <div className={styles.inner}>
        <h3 className={styles.title}>{name}</h3>
        <span>{divideNumberByPieces(price)} ₽</span>
      </div>
      <div className={styles.buttons}>
        <Button>Подробнее</Button>
        <Button primary cart>
          Купить
        </Button>
      </div>
    </li>
  );
}

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export { CardItem };
