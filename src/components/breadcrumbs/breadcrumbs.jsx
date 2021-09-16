import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './breadcrumbs.module.scss';

function Breadcrumbs({ items, className }) {
  return (
    <ul className={classNames(styles.list, className)}>
      {items.map((item) => (
        <li className={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export { Breadcrumbs };
