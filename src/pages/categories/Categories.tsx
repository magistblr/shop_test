import React, { useEffect } from 'react';
import { categoriesAPI } from '../../api/categoriesAPI';
import { Button } from '../../components/button/Button';
import { Card } from '../../components/card/Card';
import { Tags } from '../../components/tags/Tags';
import s from './Categories.module.scss';

export const Categories = () => {

  useEffect(() => {
    categoriesAPI.getCategories()
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
  }, [])


  return (
    <div className={s.wrapper}>
      <div className={s.categories__title_settings}>
        <h3 className={s.categories__title}>Категории товаров</h3>
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
      <Button type="success" text>Показать больше товаров</Button>
    </div>
  );
}
