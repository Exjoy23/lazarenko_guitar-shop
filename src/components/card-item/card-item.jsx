import React from 'react';
import StarRatings from 'react-star-ratings';
import styles from './card-item.module.scss';
import guitar from './bass-guitar.png';
import { Button } from '../button/button';

function CardItem() {
  return (
    <li className={styles.wrapper}>
      <img
        className={styles.image}
        src={guitar}
        width="80"
        height="202"
        alt="басс-гитара"
      />
      <StarRatings
        rating={4.5}
        starRatedColor="#FFD168"
        numberOfStars={5}
        starDimension="12px"
        starSpacing="1px"
      />
      <span className={styles.reviews}>15</span>
      <div className={styles.inner}>
        <h3 className={styles.title}>Честер Bass</h3>
        <span>17 500 ₽</span>
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

export { CardItem };
