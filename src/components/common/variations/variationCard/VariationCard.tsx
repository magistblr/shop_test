import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useFetchVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId, callback, inCart, productId }) => {
  const dispatch = useAppDispatch()
  //TODO (убрать баг при переключении с главной на корзину и обратно, нельзя добавить товары в корзину)

  console.log(productId);

  const { valuesArr, valuesObj, isSuccess } = useFetchVariation(productVariationId, true)
  //TODO (баг )
  useEffect(() => {
    if (isSuccess) {
      dispatch(productSlice.actions.variationsAddFetchValues([valuesObj, productVariationId]))
    }
  }, [productVariationId, isSuccess, variationsProperties])

  const btnHandler = (id: number) => {
    callback(id)
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
        <Button outlined disabled={inCart} callback={() => btnHandler(productVariationId)}>
          {inCart ? `Добавлено` : `В корзину`}
        </Button>
      </div>
    </>
  )
}
