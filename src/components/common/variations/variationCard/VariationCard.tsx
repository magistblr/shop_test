import { Button } from 'components/custom/button/Button'
import { useAppDispatch } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useFetchVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'
import { cartSlice } from 'store/reducers/CartSlice'
import { useGetProductCart } from 'hooks/useGetProductCart/useGetProductCart'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId, productId, callback }) => {
  const dispatch = useAppDispatch()

  const { packageProduct, wide, color, height, length, size, weight, isSuccess } = useFetchVariation(productVariationId)
  const values = [packageProduct, wide, length, height, weight, size, color]


  useEffect(() => {
    if (isSuccess) {
      dispatch(productSlice.actions.variationsAddFetchValues([{ packageProduct, wide, color, height, length, size, weight }, productVariationId]))
    }
  }, [productVariationId, isSuccess, variationsProperties])

  // const { productCart } = useGetProductCart(productVariationId, productId)
  //TODO
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
              <div>{property.name} </div>
            )}
          </div>
          <div className={s.variations_value}>
            {values.map(item =>
              <div>{item} </div>
            )}
          </div>
        </div>
        <Button outlined callback={() => btnHandler(productVariationId)}>
          В корзину
        </Button>
      </div>
    </>
  )
}
