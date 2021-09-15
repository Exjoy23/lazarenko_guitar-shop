import React from 'react';
import styles from './main-page.module.scss';
import { Header } from '../../header/header';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
}

export { MainPage };
