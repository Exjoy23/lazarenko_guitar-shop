import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import classNames from 'classnames';

function Button({ children, primary, secondary, cart, className, ...attrs }) {
  const Tag = attrs.to ? Link : 'button';

  return (
    <Tag
      className={classNames(
        className,
        styles.button,
        primary && styles.button_primary,
        secondary && styles.button_secondary,
        cart && styles.button_cart,
      )}
      type={attrs.to ? undefined : 'button'}
      {...attrs}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  cart: PropTypes.bool,
  className: PropTypes.string,
};

export { Button };
