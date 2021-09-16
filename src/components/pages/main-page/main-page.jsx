import React from 'react';
import styles from './main-page.module.scss';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { Title } from '../../title/title';
import { Breadcrumbs } from '../../breadcrumbs/breadcrumbs';
import { Filter } from '../../filter/filter';
import { Sort } from '../../sort/sort';

const BREADCRUMBS = ['Главная', 'Каталог'];

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Title className={styles.title}>Каталог гитар</Title>
        <Breadcrumbs className={styles.breadcrumbs} items={BREADCRUMBS} />
        <section className={styles.section}>
          <Filter />
          <Sort />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export { MainPage };
