import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.module.scss';
import classNames from 'classnames';

function Checkbox({ children, className, ...attrs }) {
  return (
    <label className={classNames(styles.label, className)}>
      <input
        className={classNames('visually-hidden', styles.input)}
        type="checkbox"
        {...attrs}
      />
      <span className={styles.text}>{children}</span>
    </label>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Checkbox };
