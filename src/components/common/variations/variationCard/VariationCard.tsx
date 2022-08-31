import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useFetchVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'
import { cartSlice } from 'store/reducers/CartSlice'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId, callback }) => {
  const dispatch = useAppDispatch()

  //TODO (убрать баг при переключении с главной на корзину и обратно, нельзя добавить товары в корзину)
  const disable = useAppSelector(state => state.cartReducer.productVariations.map(item => item.id === productVariationId ? item.inCart : false)[0])
  console.log(disable);

  const { valuesArr, valuesObj, isSuccess } = useFetchVariation(productVariationId, true)
  //TODO (баг )
  useEffect(() => {
    if (isSuccess) {
      dispatch(productSlice.actions.variationsAddFetchValues([valuesObj, productVariationId]))
    }
  }, [productVariationId, isSuccess, variationsProperties])

  const btnHandler = (id: number, disable: boolean) => {
    callback(id, disable)
    setOpenPopUp(false)
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.variations_wrapper}>
          <div className={s.variations_name}>
            {variationsProperties.map(property =>
              <div key={property.id}>{property.name} </div>
            )}
          </div>
          <div className={s.variations_value}>
            {valuesArr.map((value, index) =>
              <div key={index}>{value} </div>
            )}
          </div>
        </div>
        <Button outlined disabled={disable} callback={() => btnHandler(productVariationId, true)}>
          {disable ? `Добавлено` : `В корзину`}
        </Button>
      </div>
    </>
  )
}
