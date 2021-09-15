import React from 'react';
import styles from './main-page.module.scss';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

export { MainPage };
