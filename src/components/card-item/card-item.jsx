import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import styles from './card-item.module.scss';
import { SCROLL_HIDE_STYLE } from '../../const';
import { divideNumberByPieces } from '../../utils';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';
import { Popup } from '../popup/popup';

function CardItem({
  id,
  type,
  strings,
  name,
  preview,
  cartPreview,
  price,
  rating,
  reviews,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        <Button to="/">Подробнее</Button>
        <Button
          onClick={() => {
            setIsModalOpen(true);
            document.body.style = SCROLL_HIDE_STYLE;
          }}
          primary
          cart
        >
          Купить
        </Button>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
          onSetPopupOpen={setIsPopupOpen}
          name={name}
          id={id}
          type={type}
          strings={strings}
          price={price}
          cartPreview={cartPreview}
        />
      )}
      {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={setIsPopupOpen} />}
    </li>
  );
}

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  strings: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  cartPreview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export { CardItem };
