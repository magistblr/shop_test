import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useFetchVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId, id }) => {
  // const [openPopUp, setOpenPopUp] = useState(false)
  const dispatch = useAppDispatch()

  const { packageProduct, wide, color, height, length, size, weight, isSuccess } = useFetchVariation(productVariationId)
  const values = [packageProduct, wide, length, height, weight, size, color]

  useEffect(() => {
    if (isSuccess) {
      dispatch(productSlice.actions.variationsAddFetchValues([{ packageProduct, wide, color, height, length, size, weight }, productVariationId]))
    }
  }, [productVariationId, isSuccess, variationsProperties])

  // const { data: variationApi, isSuccess: variationSuccess } =
  //   API.useFetchProductAllVariationsQuery({
  //     filter: productId,
  //   })


  // console.log(variationApi);


  // useEffect(() => {
  //   if (variationSuccess) {
  //     dispatch(productSlice.actions.variationsFetchingSuccess([variationApi, productId]))
  //   }
  // }, [variationApi])

  const products = useAppSelector(state => state.productReducer.products)
  //TODO

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
        <Button block outlined callback={() => setOpenPopUp(false)}>
          В корзину
        </Button>
      </div>
    </>
  )
}
