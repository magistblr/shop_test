import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useFetchVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'
import { useGetProductCart } from 'hooks/useGetProductCart/useGetProductCart'
import { cartSlice } from 'store/reducers/CartSlice'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId, callback }) => {
  const dispatch = useAppDispatch()
  const id = useAppSelector(state => state.cartReducer.id)
  const productId = useAppSelector(state => state.productReducer.id)
  // const { productCart, variation } = useGetProductCart(id, productId)
  // console.log(productCart);
  // console.log(variation);

  const { packageProduct, wide, color, height, length, size, weight, isSuccess } = useFetchVariation(productVariationId)
  const values = [packageProduct, wide, length, height, weight, size, color]

  useEffect(() => {
    if (isSuccess) {
      dispatch(productSlice.actions.variationsAddFetchValues([{ packageProduct, wide, color, height, length, size, weight }, productVariationId]))
    }
  }, [productVariationId, isSuccess, variationsProperties])

  // useEffect(() => {
  // }, [productCart, variation])

  //TODO
  const btnHandler = (id: number) => {
    //   debugger
    // dispatch(cartSlice.actions.productVariationsAdd({ id: productCart.id, name: productCart.name, price: variation.price, stock: variation.stock }))
    dispatch(cartSlice.actions.id(id))
    setOpenPopUp(false)
    callback(1)
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
