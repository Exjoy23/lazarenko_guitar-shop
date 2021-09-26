import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './footer.module.scss';
import { AppRoute } from '../../const';
import { Logo } from '../logo/logo';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div>
            <Logo />
            <ul className={classNames(styles.list, styles.socials)}>
              <li className={styles.social}>
                <a className={styles.link} href="https://ru-ru.facebook.com/">
                  <img src={facebook} width="24" height="24" alt="facebook" />
                </a>
              </li>
              <li className={styles.social}>
                <a className={styles.link} href="https://www.instagram.com/">
                  <img src={instagram} width="24" height="24" alt="instagram" />
                </a>
              </li>
              <li className={styles.social}>
                <a className={styles.link} href="https://twitter.com/">
                  <img src={twitter} width="24" height="24" alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.title}>О нас</h2>
            <p className={styles.text}>
              Магазин гитар, музыкальных инструментов и гитарная мастерская в
              Санкт-Петербурге.
            </p>
            <p className={styles.text}>
              Все инструменты проверены, отстроены и доведены до идеала!
            </p>
          </div>
          <div>
            <h2 className={styles.title}>Каталог</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Акустические гитары
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Классические гитары
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Электрогитары
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Бас-гитары
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to="/">
                  Укулеле
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.title}>Информация</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.BUE}>
                  Где купить?
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.BLOG}>
                  Блог
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.FAQ}>
                  Вопрос - ответ
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.RETURN}>
                  Возврат
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} to={AppRoute.SERVICE}>
                  Сервис-центры
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.title}>Контакты</h2>
            <p className={classNames(styles.text, styles.contacts)}>
              г.&nbsp;Санкт-Петербург, м.&nbsp;Невский проспект,
              ул.&nbsp;Казанская 6.
              <br />
              <a className={styles.phone} href="tel:88125005050">
                8-812-500-50-50
              </a>
            </p>
            <p className={classNames(styles.text, styles.contacts)}>
              Режим работы:
              <br />
              <span className={styles.time}>с 11:00 до 20:00</span>, без
              выходных.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
