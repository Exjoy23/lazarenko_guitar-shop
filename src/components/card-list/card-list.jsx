import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './card-list.module.scss';
import { getIsLoading } from '../../store/data-slice/selectors';
import { MAX_GUITARS_ON_PAGE } from '../../const';
import { CardItem } from '../card-item/card-item';
import { Loader } from '../loader/loader';
import { Notification } from '../notification/notification';

function CardList({ guitars }) {
  const isLoading = useSelector(getIsLoading);

  if (isLoading) {
    return (
      <ul className={styles.list}>
        {Array(MAX_GUITARS_ON_PAGE)
          .fill('')
          .map((_, index) => (
            <Loader key={index} />
          ))}
      </ul>
    );
  }

  return (
    <ul className={styles.list}>
      {(guitars &&
        guitars.length &&
        guitars.map((item) => <CardItem key={item.id} {...item} />)) || (
        <Notification />
      )}
    </ul>
  );
}

CardList.propTypes = {
  guitars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      reviews: PropTypes.number.isRequired,
      strings: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      preview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export { CardList };
