import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './filter.module.scss';
import { Checkbox } from '../checkbox/checkbox';
import {
  changeFilteringPriceFrom,
  changeFilteringPriceTo,
  changeFilteringStrings,
  changeFilteringTypes
} from '../../store/ui-slice/ui-slice';
import {
  GUITAR_TYPES,
  GuitarsType,
  GUITAR_STRINGS,
  SortingTypes,
  SortingOrders
} from '../../const';
import {
  divideNumberByPieces,
  filterByPrice,
  filterByStrings,
  filterByType,
  sortProducts
} from '../../utils';

function Filter({ guitars, guitarTypes, guitarStrings }) {
  const dispatch = useDispatch();
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [type, setType] = useState({});
  const [strings, setStrings] = useState({});

  const filteredGuitarsByPriceAndStrings = guitars.filter(
    (item) =>
      filterByPrice(item, priceFrom, priceTo) &&
      filterByStrings(item, guitarStrings),
  );

  const filteredGuitarsByTypeAndPrice = guitars.filter(
    (item) =>
      filterByType(item, guitarTypes) &&
      filterByPrice(item, priceFrom, priceTo),
  );

  const filteredGuitarsByTypeAndStrings = guitars.filter(
    (item) =>
      filterByType(item, guitarTypes) && filterByStrings(item, guitarStrings),
  );

  const sortedGuitarsByPrice = sortProducts(
    filteredGuitarsByTypeAndStrings,
    SortingTypes.PRICE,
    SortingOrders.ASCENDING,
  );

  const minPrice = sortedGuitarsByPrice[0]?.price;
  const maxPrice = sortedGuitarsByPrice[sortedGuitarsByPrice.length - 1]?.price;

  useEffect(() => {
    dispatch(changeFilteringPriceFrom(priceFrom));
    dispatch(changeFilteringPriceTo(priceTo));
  }, [dispatch, priceFrom, priceTo]);

  useEffect(() => {
    const filteringTypes = [];

    for (const key in type) {
      if (type[key]) {
        filteringTypes.push(key);
      }
    }

    dispatch(changeFilteringTypes(filteringTypes));
  }, [dispatch, type]);

  useEffect(() => {
    const filteringStrings = [];

    for (const key in strings) {
      if (strings[key]) {
        filteringStrings.push(+key);
      }
    }

    dispatch(changeFilteringStrings(filteringStrings));
  }, [dispatch, strings]);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Фильтр</h2>
      <form>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Цена, ₽</legend>
          <div className={styles.inner}>
            <label>
              <input
                className={styles.input}
                onChange={(evt) => setPriceFrom(evt.target.value)}
                onBlur={(evt) => {
                  const value = +evt.target.value;

                  if (!value) {
                    return setPriceFrom('');
                  }

                  if (priceTo && value >= +priceTo) {
                    return setPriceFrom(priceTo);
                  }

                  if (value <= minPrice) {
                    return setPriceFrom(minPrice);
                  }

                  if (value >= maxPrice) {
                    return setPriceFrom(maxPrice);
                  }

                  setPriceFrom(value);
                }}
                value={priceFrom}
                type="number"
                placeholder={minPrice && divideNumberByPieces(minPrice)}
                aria-label="Цена от"
                min="0"
              />
            </label>
            <label>
              <input
                className={styles.input}
                onChange={(evt) => setPriceTo(evt.target.value)}
                onBlur={(evt) => {
                  const value = +evt.target.value;

                  if (!value) {
                    return setPriceTo('');
                  }

                  if (priceFrom && value <= +priceFrom) {
                    return setPriceTo(priceFrom);
                  }

                  if (value <= minPrice) {
                    return setPriceTo(minPrice);
                  }

                  if (value >= maxPrice) {
                    return setPriceTo(maxPrice);
                  }

                  setPriceTo(value);
                }}
                value={priceTo}
                type="number"
                placeholder={maxPrice && divideNumberByPieces(maxPrice)}
                aria-label="Цена до"
                min="0"
              />
            </label>
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Тип гитар</legend>
          <ul className={styles.list}>
            {GUITAR_TYPES.map((item) => (
              <li className={styles.item} key={item}>
                <Checkbox
                  onChange={(evt) => {
                    setType((state) => ({
                      ...state,
                      [evt.target.value]: evt.target.checked,
                    }));
                  }}
                  value={item}
                  disabled={
                    !filteredGuitarsByPriceAndStrings.some(
                      (guitar) => guitar.type === item,
                    )
                  }
                >
                  {GuitarsType[item]}
                </Checkbox>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Количество струн</legend>
          <ul className={styles.list}>
            {GUITAR_STRINGS.map((item) => (
              <li className={styles.item} key={item}>
                <Checkbox
                  onChange={(evt) => {
                    setStrings((state) => ({
                      ...state,
                      [evt.target.value]: evt.target.checked,
                    }));
                  }}
                  value={item}
                  disabled={
                    !filteredGuitarsByTypeAndPrice.some(
                      (guitar) => guitar.strings === item,
                    )
                  }
                >
                  {item}
                </Checkbox>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>
    </section>
  );
}

Filter.propTypes = {
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
  guitarTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  guitarStrings: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export { Filter };
