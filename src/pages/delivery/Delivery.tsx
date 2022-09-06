import { Popup } from 'components/common/popup';
import { useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { getCartTotalPriceDiscount } from 'store/selectors/selectors';
import { Button } from '../../components/custom/button/Button';

import imgGeo from '../../assets/icon/geo_delivery.svg';

import 'react-calendar/dist/Calendar.css';
import s from './Delivery.module.scss';
import { InputType } from './types';
import { Time } from 'components/custom/time/Time';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form/dist/controller';

const Input: React.FC<InputType> = ({ text, title, img, }) => (
  <div className={s.input_wrapper}>
    <h4>{title}</h4>
    <div className={s.input}>
      <img className={s.input_img} src={img} alt={img || ''} />
      <input className={s.input_input} type="text" placeholder={text} />
    </div>
  </div>
);

type InputsType = {
  name: string,
  phone: string,
};

export const Delivery: React.FC = () => {
  const [openPopUpCalendar, setOpenPopUpCalendar] = useState(false);
  const [openPopUpTime, setOpenPopUpTime] = useState(false);

  const [valueCalendar, onChangeCalendar] = useState(new Date());
  const [valueTime, setTime] = useState('9:00-15:00');

  const cartTotalPriceDiscount = useAppSelector(getCartTotalPriceDiscount)


  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = data => console.log(data);
  //TODO (доделать форму)
  return (
    <div className={s.wrapper}>
      <h3>Доставка</h3>
      <div className={s.delivery_content}>
        <div className={s.deliveryData}>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={s.delivery_dateDelivery_wrapper}>
              <h4>Когда доставить?</h4>
              <div className={s.delivery_dateDelivery}>Выберите дату:</div>
              <div className={s.delivery_dateDelivery} onClick={() => setOpenPopUpCalendar(true)}>{valueCalendar.toLocaleDateString()}</div>
              <div className={s.delivery_dateDelivery} >Выберите время:</div>
              <div className={s.delivery_dateDelivery} onClick={() => setOpenPopUpTime(true)}>{valueTime}</div>
              <Popup
                openPopup={openPopUpCalendar}
                setOpenPopup={setOpenPopUpCalendar}
                component={<Calendar onClickDay={() => setOpenPopUpCalendar(false)} minDate={new Date()} locale='ru-RU' onChange={onChangeCalendar} value={valueCalendar} />}
              />
              <Popup
                openPopup={openPopUpTime}
                setOpenPopup={setOpenPopUpTime}
                component={<Time setTime={setTime} setOpenPopUpTime={setOpenPopUpTime} />}
              />
            </div>
            <div className={s.delivery_addressDelivery_wrapper}>
              <div className={s.delivery_input_geo}>
                <Input
                  title="Куда доставить?"
                  text="Выберите адрес доставки"
                  img={imgGeo}
                />
              </div>
            </div>
            {/* <Controller
              name="name"
              control={control}
              defaultValue="Имя"
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue="Телефон"
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            /> */}
            {/* <Input {...register("phone")} title="Телефон" img="" /> */}
            {/* <input {...register("name")} /> */}
            {/* <input type="submit" /> */}
          </form>
        </div>
        <div className={s.makeOrder_wrapper}>
          <div className={s.makeOrder}>
            <div className={s.makeOrder_item}>
              <div className={s.item_descr}>Стоимость товаров: </div>
              <div className={s.item_total}>{cartTotalPriceDiscount} ₽</div>
            </div>
            <div className={s.makeOrder_item} data-makeOrder-item2>
              <div className={s.item_descr}>Стоимость доставки: </div>
              <div className={s.item_total}>200 ₽</div>
            </div>
            <div className={s.makeOrder_item}>
              <div className={s.item_descr_last}>Итого:</div>
              <div className={s.item_total_last}>{cartTotalPriceDiscount + 200} ₽</div>
            </div>
          </div>
          <Button block>Сделать заказ</Button>
        </div>
      </div>
    </div >
  );

}