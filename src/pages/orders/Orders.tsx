import React from 'react';
import { OrderCard } from '../../components/order_card/OrderCard.';
import s from './Orders.module.scss';

export const Orders = () => {
  return (
    <div className={s.wrapper}>
      <h3>История заказов</h3>
      <OrderCard/>
    </div>
  );
}
