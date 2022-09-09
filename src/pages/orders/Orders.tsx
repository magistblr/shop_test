import React from 'react';

import { OrderCard } from '../../components/common/order_card/OrderCard';

import s from './Orders.module.scss';

export const Orders: React.FC = () => {

  return (
    <div className={s.wrapper}>
      <h3>История заказов</h3>
      <div className={s.orders_wrapper}>
        <OrderCard />
      </div>
    </div>
  );
}