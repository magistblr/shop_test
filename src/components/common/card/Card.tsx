import React from 'react';

import cardImg from '../../../assets/img/image13.png';
import { Button } from '../../custom/button/Button';
import { Tags } from '../tags/Tags';

import s from './Card.module.scss';
import { CardType } from './types';

export const Card: React.FC<CardType> = () => (
  <div className={s.wrapper}>
    <img src={cardImg} alt="card" className={s.card__img} />
    <div className={s.card__tags}>
      <Tags />
    </div>
    <div className={s.card__content}>
      <p className={s.content__text}>
        Длинное название товара в <br /> одну строчку п... Длинное название магазина
      </p>
      <div className={s.content__price}>от 350 000 ₽</div>
      <div className={s.content__oldPrice}>
        450 500 ₽<span className={s.content__discount}>-10%</span>
      </div>
    </div>
    <Button block outlined>
      Добавить в корзину
    </Button>
  </div>
);
