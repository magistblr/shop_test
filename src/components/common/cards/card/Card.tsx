import { Button } from 'components/custom/button/Button';
import React from 'react';

import cardImg from '../../../../assets/img/image13.png';

import s from './Card.module.scss';
import { CardType } from './types';

export const Card: React.FC<CardType> = ({ description }) => (
  <div className={s.wrapper}>
    <img src={cardImg} alt="card" className={s.card__img} />
    <div className={s.card__tags}>
    </div>
    <div className={s.card__content}>
      <p className={s.content__text}>
        {description}
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
