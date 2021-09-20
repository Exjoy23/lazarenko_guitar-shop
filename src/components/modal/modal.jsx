import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './modal.module.scss';
import { divideNumberByPieces } from '../../utils';
import { Button } from '../button/button';
import { useDispatch } from 'react-redux';
import { addToCartGuitar } from '../../store/data-slice/data-slice';
import { SCROLL_HIDE_STYLE, SCROLL_VISIBLE_STYLE } from '../../const';

const GuitarTypes = {
  ACOUSTIC: 'Акустическая гитара',
  ELECTRIC: 'Электрогитара',
  UKULELE: 'Укулеле',
};

function Modal({
  isOpen,
  onClose,
  onSetPopupOpen,
  name,
  id,
  type,
  strings,
  price,
  cartPreview,
}) {
  const dispatch = useDispatch();

  const onModalClose = () => {
    document.body.style = SCROLL_VISIBLE_STYLE;
    onClose(false);
  };

  const onButtonClick = () => {
    dispatch(
      addToCartGuitar({
        name,
        id,
        type,
        strings,
        price,
        cartPreview,
        quantity: 1,
      }),
    );

    document.body.style = SCROLL_HIDE_STYLE;

    onSetPopupOpen(true);
    onClose(false);
  };

  return (
    <ReactModal
      className={styles.modal}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={onModalClose}
      style={{
        overlay: {
          zIndex: '10000',

          backgroundColor: 'rgba(58, 57, 57, 0.6)',
        },
      }}
      ariaHideApp={false}
    >
      <div className={styles.heading}>
        <p className={styles.action}>Добавить товар в корзину</p>
        <button className={styles.close} onClick={onModalClose} type="button" />
      </div>
      <div className={styles.inner}>
        <img src={cartPreview} width="48" height="124" alt={name} />
        <div>
          <h2 className={styles.title}>Гитара {name}</h2>
          <p className={styles.text}>Артикул: {id}</p>
          <p className={styles.text}>
            {GuitarTypes[type]}, {strings} струнная{' '}
          </p>
          <p className={styles.price}>Цена: {divideNumberByPieces(price)} ₽</p>
        </div>
        <Button className={styles.button} onClick={onButtonClick} primary>
          Добавить в корзину
        </Button>
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  strings: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cartPreview: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSetPopupOpen: PropTypes.func.isRequired,
};

export { Modal };
