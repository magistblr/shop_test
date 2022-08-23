import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useFetchVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId }) => {
  // const [openPopUp, setOpenPopUp] = useState(false)
  const products = useAppSelector(state => state.productReducer.products)
  console.log(products);
  console.log(productVariationId);

  const dispatch = useAppDispatch()

  const { packageProduct, wide, color, height, length, size, weight, isSuccess } = useFetchVariation(productVariationId)
  console.log(color);
  console.log(packageProduct);

  useEffect(() => {
    if (isSuccess) {
      dispatch(productSlice.actions.variationsAddFetchValues([{ packageProduct, wide, color, height, length, size, weight }, productVariationId]))
    }
  }, [isSuccess, productVariationId])

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

  //TODO

  return (
    <>
      <div className={s.wrapper}>
        {variationsProperties.map(property =>
          <div>
            <span>{property.name} </span>
            {/* {variations && variations.map(item => <div>{item.values.color}</div>)} */}
          </div>
        )}
        <Button block outlined callback={() => setOpenPopUp(false)}>
          В корзину
        </Button>
      </div>
    </>
  )
}
