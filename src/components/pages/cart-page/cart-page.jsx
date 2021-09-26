import React from 'react';
import styles from './cart-page.module.scss';
import { Header } from '../../header/header';
import { Title } from '../../title/title';
import { Breadcrumbs } from '../../breadcrumbs/breadcrumbs';
import { Footer } from '../../footer/footer';
import { Cart } from '../../sections/cart/cart';

const BREADCRUMBS = [
  { name: 'Главная', path: '/' },
  { name: 'Каталог', path: '/catalog' },
  { name: 'Оформляем', path: '' },
];

function CartPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Title className={styles.title}>Корзина</Title>
        <Breadcrumbs className={styles.breadcrumbs} items={BREADCRUMBS} />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export { CartPage };
