import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId }) => {
  // const [openPopUp, setOpenPopUp] = useState(false)
  const products = useAppSelector(state => state.productReducer.products)
  const variations = useAppSelector(state => state.productReducer.products.find(item => item.id === productVariationId)?.variations)

  const dispatch = useAppDispatch()

  // const { data: imageApi } = API.useFetchSortRangeFilterProductsImageQuery({
  //   filter: productId || '',
  // })
  const { packageProduct, wide, color, height, length, size, weight } = useVariation(productVariationId, productVariationId, productVariationId)
  useEffect(() => {

    if (packageProduct) {
      dispatch(productSlice.actions.variationsAddValues([{ packageProduct, wide, color, height, length, size, weight }, productVariationId]))
    }
  }, [packageProduct])
  console.log(variations);

  //TODO

  return (
    <>
      <div className={s.wrapper}>
        {variationsProperties.map(property =>
          <div>
            <span>{property.name} </span>

          </div>
        )}
        <Button block outlined callback={() => setOpenPopUp(false)}>
          В корзину
        </Button>
      </div>
    </>
  )
}
