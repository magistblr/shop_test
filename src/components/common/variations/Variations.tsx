import React, { useEffect, useState } from 'react'

import s from './Variations.module.scss'
import { VariationsType } from './types'
import { VariationCard } from './variationCard'
import { API } from 'services/apiService'
import { cartSlice } from 'store/reducers/CartSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useGetProductCart } from 'hooks/useGetProductCart/useGetProductCart'

export const Variations: React.FC<VariationsType> = ({ setOpenPopUp, variations }) => {
  // const [openPopUp, setOpenPopUp] = useState(false)

  const { data: variationsProperties, isSuccess: variationsPropertiesSuccess } = API.useFetchProductAllVariationsPropertiesQuery('')
  const dispatch = useAppDispatch()
  const id = useAppSelector(state => state.cartReducer.id)
  const productId = useAppSelector(state => state.productReducer.id)


  //TODO (не добавляет в корзину, нужны зависимости)
  const { productCart, variation } = useGetProductCart(id, productId)
  const foo = (num: number) => {
    if (productCart && variation) {
      if (num === 1) {
        dispatch(cartSlice.actions.productVariationsAdd(
          {
            id: productCart.id,
            name: productCart.name,
            price: variation.price,
            stock: variation.stock
          }
        ))
      }
    }
  }


  return (
    <>
      <div className={s.wrapper}>
        {variationsPropertiesSuccess
          && variations.map((item) =>
            <VariationCard
              key={item.id}
              setOpenPopUp={setOpenPopUp}
              variationsProperties={variationsProperties}
              productVariationId={item.id}
              callback={foo}
            />
          )
        }
      </div>
    </>
  )
}
