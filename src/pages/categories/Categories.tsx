import React, { useState } from 'react'

import { Tags } from '../../components/common/tags/Tags'
import { Button } from '../../components/custom/button/Button'

import s from './Categories.module.scss'

import { Cards } from 'components/common/cards/Cards'
import { Popup } from 'components/common/popup'
import { Settings } from 'components/common/settings'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { productSlice } from 'store/reducers/ProductSlice'

export const Categories: React.FC = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false)

  const maxRangeProduct = useAppSelector(state => state.productReducer.maxRangeProduct)

  const dispatch = useAppDispatch()

  const onClickPopup = (): void => {
    setOpenPopup(!openPopup)
  }
  console.log("categories");

  // add more products
  const onClickMore = (): void => {
    dispatch(productSlice.actions.productsMax(maxRangeProduct + 8))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.categories__title_settings}>
        <h3 className={s.categories__title}>Категории товаров</h3>
        {openPopup && (
          <Popup
            setOpenPopup={setOpenPopup}
            children={<Settings setOpenPopup={setOpenPopup} />}
          />
        )}
        <button
          type="button"
          className={s.categories__settings}
          onClick={() => onClickPopup()}
        >
          Настройки
        </button>
      </div>
      <div className={s.categories__tags}>
        <Tags />
      </div>
      <div className={s.categories__content}>
        <Cards />
      </div>
      <Button type="success" text callback={onClickMore}>
        Показать больше товаров
      </Button>
    </div>
  )
}
