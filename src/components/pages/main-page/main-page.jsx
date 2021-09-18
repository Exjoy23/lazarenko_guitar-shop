import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './main-page.module.scss';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { Title } from '../../title/title';
import { Breadcrumbs } from '../../breadcrumbs/breadcrumbs';
import { Filter } from '../../filter/filter';
import { Sort } from '../../sort/sort';
import { CardList } from '../../card-list/card-list';
import { Pagination } from '../../pagination/pagination';
import { loadGuitars } from '../../../store/slices/data-slice';

const BREADCRUMBS = ['Главная', 'Каталог'];

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGuitars());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Title className={styles.title}>Каталог гитар</Title>
        <Breadcrumbs className={styles.breadcrumbs} items={BREADCRUMBS} />
        <section className={styles.section}>
          <Filter />
          <Sort />
          <CardList />
          <Pagination />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export { MainPage };
