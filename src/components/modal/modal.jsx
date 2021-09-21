import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './modal.module.scss';
import { divideNumberByPieces } from '../../utils';
import { Button } from '../button/button';
import { useDispatch } from 'react-redux';
import {
  addToCartGuitar,
  removeFromCartGuitar,
} from '../../store/data-slice/data-slice';
import {
  GuitarTypes,
  SCROLL_HIDE_STYLE,
  SCROLL_VISIBLE_STYLE,
} from '../../const';

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
  secondary,
}) {
  const dispatch = useDispatch();

  const onModalClose = () => {
    document.body.style = SCROLL_VISIBLE_STYLE;
    onClose(false);
  };

  const onButtonAddClick = () => {
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

  const onButtonRemoveClick = () => {
    dispatch(removeFromCartGuitar(id));
    document.body.style = SCROLL_VISIBLE_STYLE;
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
        <p className={styles.action}>
          {secondary ? 'Удалить этот товар? ' : 'Добавить товар в корзину'}
        </p>
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
        <div>
          {secondary ? (
            <>
              <Button
                className={styles.button}
                onClick={onButtonRemoveClick}
                primary
              >
                Удалить товар
              </Button>
              <Button
                className={styles.button}
                onClick={onModalClose}
                secondary
              >
                Продолжить покупки
              </Button>
            </>
          ) : (
            <Button
              className={styles.button}
              onClick={onButtonAddClick}
              primary
            >
              Добавить в корзину
            </Button>
          )}
        </div>
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
  onSetPopupOpen: PropTypes.func,
  secondary: PropTypes.bool,
};

export { Modal };
