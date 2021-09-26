import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './popup.module.scss';
import { AppRoute, SCROLL_VISIBLE_STYLE } from '../../const';
import { Button } from '../button/button';

function Popup({ isOpen, onClose }) {
  const onModalClose = () => {
    document.body.style = SCROLL_VISIBLE_STYLE;
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
        <p className={styles.action}>Товар успешно добавлен в корзину</p>
        <button
          className={styles.close}
          onClick={onModalClose}
          type="button"
          aria-label="закрыть окно"
        />
      </div>
      <div className={styles.inner}>
        <Button
          className={styles.button}
          to={AppRoute.CART}
          onClick={onModalClose}
          primary
        >
          Перейти в корзину
        </Button>
        <Button className={styles.button} onClick={onModalClose} secondary>
          Продолжить покупки
        </Button>
      </div>
    </ReactModal>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Popup };
