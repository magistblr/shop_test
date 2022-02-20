import React from 'react';
import s from './Delivery.module.scss';
import imgGeo from '../../assets/icon/geo_delivery.svg';
import { Button } from '../../components/button/Button';

export const Delivery = () => {
  return (
    <div className={s.wrapper}>
      <h3>Доставка</h3>
      <div className={s.delivery_content}>
        <div className={s.deliveryData}>
          <form action="">
            <div className={s.delivery_dateDelivery_wrapper}>
              <h4>Когда доставить?</h4>
              <span className={s.delivery_dateDelivery}>Выберите дату</span>
              <span className={s.delivery_dateDelivery}>Выберите время</span>
            </div>
            <div className={s.delivery_addressDelivery_wrapper}>
              <div className={s.delivery_input_geo}>
                <Input title='Куда доставить?' text='Выберите адрес доставки' img={imgGeo}></Input>
              </div>
            </div>
            <Input title='Имя' img={""}></Input>
            <Input title='Телефон' img={""}></Input>
          </form>
        </div>
        <div className={s.makeOrder_wrapper}>
          <div className={s.makeOrder}>
            <div className={s.makeOrder_item}>
              <div className={s.item_descr}>Стоимость товаров: </div>
              <div className={s.item_total}>200 584₽</div>
            </div>
            <div className={s.makeOrder_item} data-makeOrder-item2>
              <div className={s.item_descr}>Стоимость доставки: </div>
              <div className={s.item_total}>200₽</div>
            </div>
            <div className={s.makeOrder_item}>
              <div className={s.item_descr_last}>Итого:</div>
              <div className={s.item_total_last}>200 784₽</div>
            </div>
          </div>
          <Button block>Сделать заказ</Button>
        </div>
      </div>
    </div>
  );
}


const Input: React.FC<InputType> = ({text, title, img}) => {
  return (
    <div className={s.input_wrapper}>
      <h4>{title}</h4>
      <div className={s.input}>
        <img className={s.input_img} src={img} alt={img ? img : ""} />
        <input className={s.input_input} type="text" placeholder={text}/>
      </div>
    </div>
  )
}






type InputType = {
  title: string
  img: string
  text?: string
}
