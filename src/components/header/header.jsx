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
                <Link className={styles.link} to={AppRoute.MAIN}>
                  Каталог
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Где купить?
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  О компании
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Сервис-центры
                </Link>
              </li>
            </ul>
            <ul className={classNames(styles.list, styles.items)}>
              <li>
                <Link
                  className={classNames(styles.link, styles.link_icon)}
                  to="/"
                >
                  <img
                    src={location}
                    width="15"
                    height="22"
                    alt="Наши магазины"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className={classNames(styles.link, styles.link_icon)}
                  to="/"
                >
                  <img
                    src={search}
                    width="15"
                    height="20"
                    alt="Поиск товаров"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className={classNames(styles.link, styles.link_icon)}
                  to={AppRoute.CART}
                >
                  <img
                    className={styles.cart}
                    src={cart}
                    width="20"
                    height="20"
                    alt="Корзина товаров"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.guitar}>
        <img
          src={guitar}
          width="825"
          height="298"
          alt="Шестиструнная электрогитара"
        />
      </div>
    </header>
  );
}

export { Header };
