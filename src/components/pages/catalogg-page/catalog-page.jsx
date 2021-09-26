import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './catalog-page.module.scss';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { Title } from '../../title/title';
import { Breadcrumbs } from '../../breadcrumbs/breadcrumbs';
import { loadGuitars } from '../../../store/data-slice/data-slice';
import { Catalog } from '../../sections/catalog/catalog';

const BREADCRUMBS = [
  { name: 'Главная', path: '/' },
  { name: 'Каталог', path: '' },
];

function CatalogPage() {
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
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export { CatalogPage };
