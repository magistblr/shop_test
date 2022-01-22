import React from 'react';
import { Card } from '../../components/card/Card';
import { Tag } from '../../components/tags/Tag';
import { Tags } from '../../components/tags/Tags';
import s from './Categories.module.scss';

export const Categories = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.categories__title_settings}>
        <p className={s.categories__title}>Категории товаров</p>
        <a className={s.categories__settings} href="#">Настройки</a>
      </div>
      <div className={s.categories__tags}>
        <Tags></Tags>
      </div>
      <div className={s.categories__content}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
