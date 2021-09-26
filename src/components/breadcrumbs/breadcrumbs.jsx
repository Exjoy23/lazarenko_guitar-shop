import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './breadcrumbs.module.scss';
import { Link } from 'react-router-dom';

function Breadcrumbs({ items, className }) {
  return (
    <ul className={classNames(styles.list, className)}>
      {items.map((item) => (
        <li className={styles.item} key={item.name}>
          {item.path ? (
            <Link className={styles.link} to={item.path}>
              {item.name}
            </Link>
          ) : (
            item.name
          )}
        </li>
      ))}
    </ul>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  className: PropTypes.string,
};

export { Breadcrumbs };
