import React from 'react';
import StarRatings from 'react-star-ratings';
import styles from './card-item.module.scss';
import guitar from './bass-guitar.png';
import { Button } from '../button/button';

function CardItem() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={guitar} alt="басс-гитара" />
      <div className={styles.rating}>
        <StarRatings
          rating={4.5}
          starRatedColor="#FFD168"
          numberOfStars={5}
          starDimension="12px"
          starSpacing="1px"
        />
        <span className={styles.reviews}>15</span>
        <div className={styles.inner}>
          <span>Честер Bass</span>
          <span>17 500 ₽</span>
        </div>
        <div className={styles.buttons}>
          <Button>Подробнее</Button>
          <Button primary cart>
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
}

export { CardItem };
