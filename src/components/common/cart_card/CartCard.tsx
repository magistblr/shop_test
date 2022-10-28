import { useAppDispatch } from 'hooks/redux';
import React, { useState } from 'react';
import { cartSlice } from 'store/reducers/CartSlice';
import { mathMinusPercent } from 'utils/mathsFunctions';

import cartDeleteImg from '../../../assets/icon/delete.svg';
import cartCardImg from '../../../assets/img/card_cart.svg';

import s from './CartCard.module.scss';
import { CartCardType } from './types';

export const CartCard: React.FC<CartCardType> = ({ name, price, stock, id, count, totalPrice }) => {
  const [countLocal, setCountLocal] = useState<number>(count)
  const [priceTotal, setPriceTotal] = useState<number>(totalPrice !== 0 ? totalPrice : price)
  const dispatch = useAppDispatch()

  const handlerCardCart = (id: number) => {
    dispatch(cartSlice.actions.productVariationsRemove(id))
  }

  const handlerCountPlus = () => {
    if (count < stock) {
      setCountLocal(() => count + 1)
      setPriceTotal(() => priceTotal + price)
      dispatch(cartSlice.actions.totalPriceCountPlus([price, id]))
    }
  }

  const handlerCountMinus = () => {
    if (count !== 1) {
      setCountLocal(() => count - 1)
      setPriceTotal(() => priceTotal - price)
      dispatch(cartSlice.actions.totalPriceCountMinus([price, id]))
    }
  }

  return (
    <div className={s.wrapper} data-cart-card-item>
      <img className={s.card_img} src={cartCardImg} alt="cartCard" />
      <div className={s.card_title_wrapper}>
        <div className={s.card_title}>{name}</div>
        <div className={s.card_promotion}>
          <div className={s.card_promotion_sold_time}>
            <div className={s.card_promotion_sold}>{stock}</div>
            <p className={s.sold_all_text}>На складе</p>
          </div>
        </div>
      </div>
      <div className={s.counter}>
        <div className={s.counter_minus_wrapper} onClick={() => handlerCountMinus()}>
          <div className={s.counter_minus} />
        </div>
        <div className={s.counter_total}>{countLocal}</div>
        <div className={s.counter_plus_wrapper} onClick={() => handlerCountPlus()}>
          <div className={s.counter_plus} />
        </div>
      </div>
      <div className={s.card_price_wrapper}>
        <p className={s.price}>{mathMinusPercent(priceTotal, 10)} ₽</p>
        <p className={s.old_price}>{priceTotal} ₽</p>
      </div>
      <div className={s.card_delete}>
        <img onClick={() => handlerCardCart(id)} className={s.card_delete_img} src={cartDeleteImg} alt="remove" />
      </div>
    </div>
  );
}
