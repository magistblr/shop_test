import React from 'react';

import cartDeleteImg from '../../../assets/icon/delete.svg';
import cartCardImg from '../../../assets/img/card_cart.svg';

import s from './CartCard.module.scss';
import { CartCardType } from './types';

export const CartCard: React.FC<CartCardType> = () => (
  <div className={s.wrapper} data-cartCardItem>
    <img className={s.card_img} src={cartCardImg} alt="cartCard" />
    <div className={s.card_title_wrapper}>
      <div className={s.card_title}>Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый</div>
      <div className={s.card_promotion}>
        <div className={s.card_promotion_sold_time}>
          <div className={s.card_promotion_sold}>120 шт.</div>
          за 12:48:35
        </div>
        <div className={s.card_promotion_sold_all}>
          <p className={s.sold_all_text}>Куплено: </p>
          <p className={s.sold_all}> 150 шт.</p>
        </div>
      </div>
    </div>
    <div className={s.counter}>
      <div className={s.counter_minus_wrapper}>
        <div className={s.counter_minus} />
      </div>
      <div className={s.counter_total}>25</div>
      <div className={s.counter_plus_wrapper}>
        <div className={s.counter_plus} />
      </div>
    </div>
    <div className={s.card_price_wrapper}>
      <p className={s.price}>от 350 000 ₽</p>
      <p className={s.old_price}>450 500 ₽</p>
    </div>
    <div className={s.card_delete}>
      <img className={s.card_delete_img} src={cartDeleteImg} alt="delete" />
    </div>
  </div>
);
