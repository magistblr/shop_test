import { Popup } from 'components/common/popup';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import { getCartTotalPriceDiscount, getProductsCount } from 'store/selectors/selectors';
import { Button } from '../../components/custom/button/Button';

import 'react-calendar/dist/Calendar.css';
import s from './Delivery.module.scss';
import { Time } from 'components/custom/time/Time';
import { useForm, FormProvider } from 'react-hook-form';
import { orderSlice, OrderType } from 'store/reducers/OrderSlice';
import { useGetOrders } from 'hooks/useGetOrder/useGetOrder';
import { v1 } from 'uuid';

export interface IFormInputs {
  name: string
  address: string
  phone: number
}

export const Delivery: React.FC = () => {
  const [openPopUpCalendar, setOpenPopUpCalendar] = useState(false);
  const [openPopUpTime, setOpenPopUpTime] = useState(false);

  const [valueCalendar, onChangeCalendar] = useState(new Date());
  const [valueTime, setTime] = useState('9:00-15:00');

  const cartTotalPriceDiscount = useAppSelector(getCartTotalPriceDiscount)
  const dispatch = useAppDispatch()

  const [formData, setFormValue] = useState<IFormInputs>()

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>();
  const methods = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    setFormValue(data)
  };
  //TODO (сделать добавление заказов)
  // const arr = {
  //   name: "dwd",
  //   address: "dwda",
  //   phone: 32131
  // }



  const [order, setOrder] = useState<OrderType>();
  const totalPriceDiscount = useAppSelector(getCartTotalPriceDiscount)
  const countCartState = useAppSelector(getProductsCount)

  //TODO (баг постоянного рендера изза useEffect)
  // useEffect(() => {
  //   setOrder(
  //     order = {
  //       phone: formData?.phone,
  //       address: formData?.address,
  //       nameUser: formData?.name,
  //       date: new Date().toDateString(),
  //       numberOrders: countCartState,
  //       totalprice: totalPriceDiscount,
  //       id: v1()
  //     }
  //   )
  // }), [countCartState];

  // const { order } = useGetOrders()
  console.log(order);

  const handlerMakeOrder = () => {
    // dispatch(orderSlice.actions.ordersAdd(order))
  }

  //TODO (перенести форму в отдельный компонент)
  return (
    <div className={s.wrapper}>
      <h3>Доставка</h3>
      <div className={s.delivery_content}>
        <div className={s.deliveryData}>
          <FormProvider {...methods} >
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
              </div>
              <h4>Адрес</h4>
              <div className={s.input_wrapper}>
                <div className={s.input}>
                  <input className={errors.address?.message ? `${s.input_input} ${s.input_required}` : `${s.input_input}`}  {...register("address", { required: "Обязательное поле!" })} />
                </div>
              </div>
              {errors.address && <div className={s.required_message}>{errors.address.message}</div>}
              <h4>Имя</h4>
              <div className={s.input_wrapper}>
                <div className={s.input}>
                  <input className={errors.name?.message ? `${s.input_input} ${s.input_required}` : `${s.input_input}`} {...register("name", { required: "Обязательное поле!" })} />
                </div>
              </div>
              {errors.name && <div className={s.required_message}>{errors.name.message}</div>}
              <h4>Телефон</h4>
              <div className={s.input_wrapper}>
                <div className={s.input}>
                  <span>+7</span>
                  <input className={errors.phone?.message ? `${s.input_input} ${s.input_required}` : `${s.input_input}`}
                    {...register("phone", {
                      required: "Обязательное поле!",
                      pattern: { value: /^(([0-9]){10})$/i, message: "Введите номер в формате 9998887766" }
                    })}
                    type='number'
                    placeholder="9998887766"
                    onKeyDown={(e) => e.key === 'e' && e.preventDefault()}
                  />
                </div>
              </div>
              {errors.phone && <div className={s.required_message}>{errors.phone.message}</div>}
              <div className={s.submit_wrapper} >
                <input className={s.submit} type="submit" value="Сохранить" />
              </div>
            </form>
          </FormProvider>
        </div>
        <div className={s.makeOrder_wrapper}>
          <div className={s.makeOrder}>
            <div className={s.makeOrder_item}>
              <div className={s.item_descr}>Стоимость товаров: </div>
              <div className={s.item_total}>{cartTotalPriceDiscount} ₽</div>
            </div>
            <div className={s.makeOrder_item} data-make-order-item2>
              <div className={s.item_descr}>Стоимость доставки: </div>
              <div className={s.item_total}>200 ₽</div>
            </div>
            <div className={s.makeOrder_item}>
              <div className={s.item_descr_last}>Итого:</div>
              <div className={s.item_total_last}>{cartTotalPriceDiscount + 200} ₽</div>
            </div>
          </div>
          <Button callback={handlerMakeOrder} disabled={!formData} block>Сделать заказ</Button>
        </div>
      </div>
    </div >
  );
}



