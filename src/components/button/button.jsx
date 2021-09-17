import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import classNames from 'classnames';

function Button({ children, primary, cart, className, ...attrs }) {
  return (
    <button
      className={classNames(
        className,
        styles.button,
        primary && styles.button_primary,
        cart && styles.button_cart,
      )}
      {...attrs}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  cart: PropTypes.bool,
  className: PropTypes.string,
};

export { Button };
