import React from 'react';
import { mathMinusPercent } from 'utils/mathsFunctions';

import cartDeleteImg from '../../../assets/icon/delete.svg';
import cartCardImg from '../../../assets/img/card_cart.svg';

import s from './CartCard.module.scss';
import { CartCardType } from './types';

export const CartCard: React.FC<CartCardType> = ({ name, price, stock }) => (
  <div className={s.wrapper} data-cartCardItem>
    <img className={s.card_img} src={cartCardImg} alt="cartCard" />
    <div className={s.card_title_wrapper}>
      <div className={s.card_title}>{name}</div>
      <div className={s.card_promotion}>
        <div className={s.card_promotion_sold_time}>
          <div className={s.card_promotion_sold}>{stock}</div>
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
      <p className={s.price}>{mathMinusPercent(price, 10)} ₽</p>
      <p className={s.old_price}>{price} ₽</p>
    </div>
    <div className={s.card_delete}>
      <img className={s.card_delete_img} src={cartDeleteImg} alt="delete" />
    </div>
  </div>
);
