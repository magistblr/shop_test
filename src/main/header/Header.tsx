import React from 'react';
import s from './Header.module.scss';
import searchIcon from '../../assets/icon/search.svg';
import geoIcon from '../../assets/icon/geo.svg';
import basket from '../../assets/icon/basket.svg';
import ava from '../../assets/img/ava.png';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <div className={s.wrapper}>
      <header className={s.wrapper__inner}>
        <h1>
          <Link to="/">React</Link>
        </h1>
        <div className={s.geo}>
          <div className={s.geo__icon}>
            <img src={geoIcon} alt="geo" />
          </div>
          <div className={s.geo__text}>
            Александровск-Са...
          </div>
        </div>
        <div className={s.search}>
          <input className={s.input} type="text" placeholder='Поиск бренда, товара, категории...'/>
          <div className={s.search__button}> <img src={searchIcon} alt="search" /> </div>
        </div>
        <div className={s.basket_ava__wrapper}>
          <Link to="/cart">
            <div className={s.basket}>
              <img src={basket} alt="basket" />
              <div className={s.counter}>10+</div>
            </div>
          </Link>
          <Link to="/orders">
            <img className={s.ava} src={ava} alt="ava" />
          </Link>
        </div>
      </header>
    </div>
  );
}
