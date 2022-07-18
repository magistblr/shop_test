import React, { useState } from 'react';

import { Card } from '../../components/common/card/Card';
import { Tags } from '../../components/common/tags/Tags';
import { Button } from '../../components/custom/button/Button';

import s from './Categories.module.scss';

import { Popup } from 'components/common/popup';

export const Categories: React.FC = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const onClick = (): void => {
    setOpenPopup(!openPopup);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.categories__title_settings}>
        <h3 className={s.categories__title}>Категории товаров</h3>
        {openPopup && <Popup setOpenPopup={setOpenPopup} />}
        <button
          type="button"
          className={s.categories__settings}
          onClick={() => onClick()}
        >
          Настройки
        </button>
      </div>
      <div className={s.categories__tags}>
        <Tags />
      </div>
      <div className={s.categories__content}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button type="success" text>
        Показать больше товаров
      </Button>
    </div>
  );
};
