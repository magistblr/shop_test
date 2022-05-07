import React from 'react';

import promo from '../../assets/icon/frame.svg';
import bg1 from '../../assets/img/Image1.png';
import bg2 from '../../assets/img/Image2.png';
import { Button } from '../../components/custom/button/Button';

import s from './RightPanel.module.scss';

export const RightPanel: React.FC = () => (
  <aside className={s.wrapper}>
    <div className={s.promo}>
      <img className={s.promo__icon} src={promo} alt="promo" />
      <div className={s.more_details__wrapper}>
        <div className={s.more_details__text}>Получай товары БЕСПЛАТНО!</div>
        <Button type="primary">Узнать подробнее</Button>
      </div>
    </div>
    <div className={s.container}>
      <img src={bg1} alt="" />
      <div className={s.text}>Новая коллекция</div>
    </div>

    <div className={s.container}>
      <img src={bg2} alt="" />
      <div className={s.text}>Новая коллекция</div>
    </div>

    <div className={s.container}>
      <img src={bg1} alt="" />
      <div className={s.text}>Новая коллекция</div>
    </div>
  </aside>
);
