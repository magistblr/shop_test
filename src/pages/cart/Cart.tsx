import React from 'react';
import { Button } from '../../components/button/Button';
import s from './Cart.module.scss';
import cartHeaderImg from '../../assets/img/cart_img.svg';
import { CartCard } from '../../components/cart_card/CartCard';

export const Cart = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header_cart}>
        <h2>Корзина</h2>
        <div className={s.cart_clear}>Очистить корзину</div>
      </div>
      <div className={s.content_wrapper}>
        <div className={s.content_header}>
          <div className={s.header}>
            <h3>Xiaomi</h3>
            <div className={s.content_price}>
              <p className={s.price_description}>Стоимость корзины:</p>
              <p className={s.price}>1 185 000₽</p>
            </div>
            <Button>Оформить</Button>
          </div>
          <img src={cartHeaderImg} alt="cart_header_img" />
        </div>
        <div className={s.cart_cards_wrapper}>
          <div className={s.cart_cards}>
            <CartCard></CartCard>
            <CartCard></CartCard>
            <CartCard></CartCard>
            <CartCard></CartCard>
          </div>
        </div>
      </div>
    </div>
  );
}
