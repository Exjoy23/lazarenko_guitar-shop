import React from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import { AppRoute } from '../../const';
import { Logo } from '../logo/logo';
import { Link } from 'react-router-dom';
import location from './location.svg';
import search from './search.svg';
import cart from './cart.svg';
import guitar from './guitar.png';

function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Logo primary />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to={AppRoute.MAIN}>Каталог</Link>
              </li>
              <li className={styles.item}>
                <Link to="/">Где купить?</Link>
              </li>
              <li className={styles.item}>
                <Link to="/">О компании</Link>
              </li>
              <li className={styles.item}>
                <Link to="/">Сервис-центры</Link>
              </li>
            </ul>
            <ul className={classNames(styles.list, styles.items)}>
              <li>
                <Link className={styles.link} to="/">
                  <img src={location} alt="Наши магазины" />
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/">
                  <img src={search} alt="Поиск товаров" />
                </Link>
              </li>
              <li>
                <Link className={styles.link} to={AppRoute.CART}>
                  <img
                    className={styles.cart}
                    src={cart}
                    alt="Корзина товаров"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.guitar}>
        <img src={guitar} alt="Шестиструнная электрогитара" />
      </div>
    </header>
  );
}

export { Header };
