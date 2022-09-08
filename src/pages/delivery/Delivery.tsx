import { Popup } from 'components/common/popup';
import { useAppSelector } from 'hooks/redux';
import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-calendar';
import { getCartTotalPriceDiscount } from 'store/selectors/selectors';
import { Button } from '../../components/custom/button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import imgGeo from '../../assets/icon/geo_delivery.svg';

import 'react-calendar/dist/Calendar.css';
import s from './Delivery.module.scss';
import { InputType } from './types';
import { Time } from 'components/custom/time/Time';
import { SubmitHandler, useController, UseControllerProps, useForm, Controller, FormProvider } from 'react-hook-form';


type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

interface IInputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, register, required }) => {


  return (
    <div className={s.input_wrapper}>
      <div className={s.input}>
        <label>{label}</label>
        <input className={style} name={label} ref={register({ required })} />
      </div>
    </div>
  );
}

export const Delivery: React.FC = () => {
  const [openPopUpCalendar, setOpenPopUpCalendar] = useState(false);
  const [openPopUpTime, setOpenPopUpTime] = useState(false);

  const [valueCalendar, onChangeCalendar] = useState(new Date());
  const [valueTime, setTime] = useState('9:00-15:00');

  const cartTotalPriceDiscount = useAppSelector(getCartTotalPriceDiscount)

  const schema = yup.object({
    name: yup.string().required(),
    phone: yup.number().required()
  });

  interface IFormInputs {
    name: string
    address: string
    phone: string
  }


  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>();
  const methods = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    console.log(data)
  };

  const style = required ? `${s.input_input} ${s.input_required}` : `${s.input_input}`

  //TODO (доделать форму)
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
                  <input className={style} {...register("address")} />
                </div>
              </div>
              {errors.address && <span>This field is required</span>}
              <h4>Имя</h4>
              <div className={s.input_wrapper}>
                <div className={s.input}>
                  <input {...register("name")} />
                </div>
              </div>
              {errors.name && <span>This field is required</span>}
              <h4>Телефон</h4>
              <div className={s.input_wrapper}>
                <div className={s.input}>
                  <input {...register("phone")} />
                </div>
              </div>
              {errors.phone && <span>This field is required</span>}
              <input type="submit" />
            </form>
          </FormProvider>
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



