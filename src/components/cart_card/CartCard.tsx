import React from 'react';
import s from './CartCard.module.scss';
import cartCardImg from '../../assets/img/card_cart.svg';
import cartDeleteImg from '../../assets/icon/delete.svg';

export type CartCardType = {
  
}

export const CartCard: React.FC<CartCardType> = ({}) => {


  return (
    <div className={s.wrapper}>
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
        <span className={s.counter_minus}>-</span>
        <span className={s.counter_total}>25</span>
        <div className={s.counter_plus}>+</div>
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
}
