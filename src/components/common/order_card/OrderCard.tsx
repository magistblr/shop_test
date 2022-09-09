import React from 'react';

import hiddenImg from '../../../assets/icon/hidden.svg';
import orderImg from '../../../assets/img/order_logo.png';

import s from './OrderCard.module.scss';
import { OrderCardType, OrderItemType } from './types';

const OrderItem: React.FC<OrderItemType> = ({ title, description, decorator }) => (
  <div className={s.orders_item_wrapper}>
    <div className={s.item_title}>{title}</div>
    <div className={s.item_descr} data-text-color={decorator}>
      {description}
    </div>
  </div>
);

export const OrderCard: React.FC<OrderCardType> = () => (
  <div className={s.wrapper}>
    <div className={s.header}>
      <div className={s.order_wrapper}>
        <img className={s.order_img} src={orderImg} alt="order_logo" />
        <div className={s.order_name_wrapper}>
          <h4>Заказ от</h4>
          <div className={s.order_data}>{new Date().toLocaleDateString()}</div>
        </div>
        <div className={s.order_more}>Подробнее</div>
      </div>
      <img className={s.order_hidden} src={hiddenImg} alt="more" />
    </div>
    <div className={s.content}>
      <div className={s.content_status}>
        <OrderItem title="Статус заказа" description="Создан" />
        <div className={s.status_wrapper}>
          <OrderItem title="Номер заказа" decorator="2" description="#664-333" />
          <div className={s.status_pack_img}>
            <div className={s.status_card1} />
            <div className={s.status_card2} />
          </div>
        </div>
      </div>
      <div className={s.content_total}>
        <OrderItem title="Кол-во товаров" description="4 шт." />
        <OrderItem title="Стоимость заказа" description="250 000₽" />
        <OrderItem title="Адрес доставки" description="ул. Коммунистич...д.1, стр.1" />
      </div>
    </div>
  </div>
);
