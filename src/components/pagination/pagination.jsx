import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './pagination.module.scss';
import { DEFAULT_PAGE } from '../../const';

const MIN_PAGES_COUNT = 2;
const PAGE_COUNT = 1;

function Pagination({ totalPages, currentPage, onSetCurrentPage }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pageNumbers = [];

    for (let i = PAGE_COUNT; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    setPages(pageNumbers);
  }, [totalPages]);

  return (
    <ul className={styles.list}>
      {currentPage > DEFAULT_PAGE && (
        <li className={styles.item}>
          <button
            className={classNames(styles.button, styles.button_next)}
            onClick={() => onSetCurrentPage((state) => state - PAGE_COUNT)}
            type="button"
          >
            Назад
          </button>
        </li>
      )}
      {pages.length >= MIN_PAGES_COUNT &&
        pages.map((item) => (
          <li className={styles.item} key={item}>
            <button
              className={classNames(
                styles.button,
                item === currentPage && styles.button_active,
              )}
              onClick={() => onSetCurrentPage(item)}
              type="button"
            >
              {item}
            </button>
          </li>
        ))}
      {currentPage < totalPages && (
        <li className={styles.item}>
          <button
            className={classNames(styles.button, styles.button_next)}
            onClick={() => onSetCurrentPage((state) => state + PAGE_COUNT)}
            type="button"
          >
            Далее
          </button>
        </li>
      )}
    </ul>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onSetCurrentPage: PropTypes.func.isRequired,
};

export { Pagination };
