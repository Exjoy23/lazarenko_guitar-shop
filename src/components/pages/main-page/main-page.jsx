import React, { useEffect } from 'react';
import axios from 'axios';
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
import { addGuitars } from '../../../store/slices/data-slice';

const GUITARS_URL =
  'https://guitar-shop-23-default-rtdb.europe-west1.firebasedatabase.app/guitars.json';
const BREADCRUMBS = ['Главная', 'Каталог'];

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(GUITARS_URL).then(({ data }) => dispatch(addGuitars(data)));
  });

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
