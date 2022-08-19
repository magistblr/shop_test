import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useVariation } from 'hooks/useVariation/useVariation'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId }) => {
  // const [openPopUp, setOpenPopUp] = useState(false)
  const products = useAppSelector(state => state.productReducer.products)

  const dispatch = useAppDispatch()

  // const { data: imageApi } = API.useFetchSortRangeFilterProductsImageQuery({
  //   filter: productId || '',
  // })
  // useEffect(() => {
  //   if (variationSuccess) {
  //     dispatch(productSlice.actions.variationsFetchingSuccess([variationApi, productId]))
  //   }
  // }, [variationSuccess])

  // const closePopUp = () => {}
  //TODO
  const packageProduct = useVariation(productVariationId, productVariationId, productVariationId)
  console.log(packageProduct);

  return (
    <>
      <div className={s.wrapper}>
        {variationsProperties.map(property =>
          <div>
            <span>{property.name} </span>
            {/* <span>{packageProduct} </span> */}
          </div>
        )}
        <Button block outlined callback={() => setOpenPopUp(false)}>
          В корзину
        </Button>
      </div>
    </>
  )
}
