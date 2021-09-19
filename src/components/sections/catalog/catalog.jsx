import React from 'react';
import { useSelector } from 'react-redux';
import styles from './catalog.module.scss';
import { Filter } from '../../filter/filter';
import { Sort } from '../../sort/sort';
import { CardList } from '../../card-list/card-list';
import { Pagination } from '../../pagination/pagination';
import { getGuitars } from '../../../store/data-slice/selectors';
import {
  getFilteringPriceFrom,
  getFilteringPriceTo,
  getFilteringStrings,
  getFilteringTypes,
  getSortingOrder,
  getSortingType,
} from '../../../store/ui-slice/selectors';
import { filterProducts, sortProducts } from '../../../utils';

function Catalog() {
  const guitars = useSelector(getGuitars);
  const sortingType = useSelector(getSortingType);
  const sortingOrder = useSelector(getSortingOrder);
  const filteringPriceFrom = useSelector(getFilteringPriceFrom);
  const filteringPriceTo = useSelector(getFilteringPriceTo);
  const filteringTypes = useSelector(getFilteringTypes);
  const filteringStrings = useSelector(getFilteringStrings);

  const filteredGuitars = filterProducts(
    guitars,
    filteringPriceFrom,
    filteringPriceTo,
    filteringTypes,
    filteringStrings,
  );
  const sortedGuitars = sortProducts(
    filteredGuitars,
    sortingType,
    sortingOrder,
  );

  return (
    <section className={styles.section}>
      <h2 className="visually-hidden">Каталог гитар</h2>
      <Filter
        guitars={guitars}
        guitarTypes={filteringTypes}
        guitarStrings={filteringStrings}
      />
      <Sort />
      <CardList guitars={sortedGuitars} />
      <Pagination />
    </section>
  );
}

export { Catalog };
