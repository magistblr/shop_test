import React, { useEffect, useState } from 'react'

import s from './Variations.module.scss'
import { VariationsType } from './types'
import { VariationCard } from './variationCard'
import { API } from 'services/apiService'
import { cartSlice } from 'store/reducers/CartSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useGetProductCart } from 'hooks/useGetProductCart/useGetProductCart'
import { IProductVariations } from 'models/IProductVariations'
import ProductSlice, { productSlice } from 'store/reducers/ProductSlice'

export const Variations: React.FC<VariationsType> = ({ setOpenPopUp, variations }) => {
  // const [openPopUp, setOpenPopUp] = useState(false)
  const { data: variationsProperties, isSuccess: variationsPropertiesSuccess, refetch } = API.useFetchProductAllVariationsPropertiesQuery('')
  const dispatch = useAppDispatch()
  const productId = useAppSelector(state => state.productReducer.id)

  const product = useAppSelector(state => state.productReducer.products.filter(item => item.id === productId ? item : "")[0])

  const addProductToCartCallback = (idVariation: number, inCart: boolean) => {
    if (product) {
      let variation = product.variations.filter(item => item.id === idVariation ? item : '')[0]
      dispatch(productSlice.actions.variationsAddInCart())
      dispatch(productSlice.actions.variationsAddInCartValue([inCart, productId, idVariation]))
      dispatch(cartSlice.actions.productVariationsAdd(
        {
          productId: product.id,
          id: variation.id,
          name: product.name,
          price: variation.price,
          stock: variation.stock,
          count: 0,
          inCart: true
        }
      ))
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
              callback={addProductToCartCallback}
            />
          )
        }
      </div>
    </>
  )
}
