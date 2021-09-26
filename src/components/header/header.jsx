import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './header.module.scss';
import { AppRoute, ProductKeys } from '../../const';
import { Logo } from '../logo/logo';
import { Link } from 'react-router-dom';
import { getCartGuitars } from '../../store/data-slice/selectors';
import { getSumProducts } from '../../utils';
import location from './location.svg';
import search from './search.svg';
import cart from './cart.svg';
import guitar from './guitar.png';

function Header() {
  const cartGuitars = useSelector(getCartGuitars);

  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Logo primary />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.CATALOG}>
                  Каталог
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.BUE}>
                  Где купить?
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.ABOUT}>
                  О компании
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.SERVICE}>
                  Сервис-центры
                </Link>
              </li>
            </ul>
            <ul className={classNames(styles.list, styles.items)}>
              <li>
                <Link
                  className={classNames(styles.link, styles.link_icon)}
                  to={AppRoute.LOCATION}
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
                  to={AppRoute.SEARCH}
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
                  className={classNames(
                    styles.link,
                    styles.link_icon,
                    styles.link_cart,
                  )}
                  to={AppRoute.CART}
                >
                  <img
                    src={cart}
                    width="15"
                    height="20"
                    alt="Корзина товаров"
                  />
                  <span className={styles.badge}>
                    {getSumProducts(cartGuitars, ProductKeys.QUANTITY)}
                  </span>
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
