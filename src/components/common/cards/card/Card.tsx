import { Popup } from 'components/common/popup';
import { Button } from 'components/custom/button/Button';
import Carousel from 'components/custom/carousel/Carousel';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { API } from 'services/apiService';
import { appSlice } from 'store/reducers/AppSlice';
import { mathMinusPercent } from 'utils/mathsFunctions';

import s from './Card.module.scss';
import { CardType } from './types';

export const Card: React.FC<CardType> = ({ description, productId }) => {
  const globalShadow = useAppSelector(state => state.appReducer.globalShadow);

  const dispatch = useAppDispatch();

  const { data: imageApi } = API.useFetchSortRangeFilterProductsImageQuery({
    filter: productId ? productId : "",
  });
  const { data: variationApi } = API.useFetchProductVariationsQuery(productId);

  const price = variationApi ? variationApi.price : 0
  const newPrice = mathMinusPercent(price, 10)

  const image1 = imageApi && `https://test2.sionic.ru/${imageApi[0].image_url}`
  const image2 = imageApi && `https://test2.sionic.ru/${imageApi[1].image_url}`
  const image3 = imageApi && `https://test2.sionic.ru/${imageApi[2].image_url}`
  //TODO
  const onClickHandler = () => {
    dispatch(appSlice.actions.globalShadowChange())
  }

  return (
    <>
      {globalShadow &&
        <div className={s.wrapper__popup}>
          <Popup setOpenPopup={onClickHandler}></Popup>
        </div>
      }
      < div className={s.wrapper} >
        <Carousel
          show={1}
        >
          <img src={image1} alt="card" className={s.card__img} />
          <img src={image2} alt="card" className={s.card__img} />
          <img src={image3} alt="card" className={s.card__img} />
        </Carousel>
        <div className={s.card__tags}>
        </div>
        <div className={s.card__content}>
          <p className={s.content__text}>
            {description}
          </p>
          <div className={s.content__price}>от {newPrice} ₽</div>
          <div className={s.content__oldPrice}>
            {price} ₽<span className={s.content__discount}>-10%</span>
          </div>
        </div>
        <Button block outlined callback={onClickHandler}>
          Добавить в корзину
        </Button>
      </div>
    </>
  )
}
