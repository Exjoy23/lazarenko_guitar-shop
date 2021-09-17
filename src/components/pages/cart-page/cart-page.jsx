import React from 'react';
import styles from './cart-page.module.scss';
import { Header } from '../../header/header';
import { Title } from '../../title/title';
import { Breadcrumbs } from '../../breadcrumbs/breadcrumbs';
import { Footer } from '../../footer/footer';
import { BasketList } from '../../basket-list/basket-list';

const BREADCRUMBS = ['Главная', 'Каталог', 'Оформляем'];

function CartPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Title className={styles.title}>Корзина</Title>
        <Breadcrumbs className={styles.breadcrumbs} items={BREADCRUMBS} />
        <section className={styles.section}>
          <BasketList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export { CartPage };
