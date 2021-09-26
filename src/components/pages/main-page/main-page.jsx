import React from 'react';
import styles from './main-page.module.scss';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { Title } from '../../title/title';
import { Breadcrumbs } from '../../breadcrumbs/breadcrumbs';

const BREADCRUMBS = [{ name: 'Главная', path: '' }];

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Title className={styles.title}>Главная страница</Title>
        <Breadcrumbs className={styles.breadcrumbs} items={BREADCRUMBS} />
        <div>Страница в разработке. Используйте навигацию в шапке страницы</div>
      </main>
      <Footer />
    </div>
  );
}

export { MainPage };
