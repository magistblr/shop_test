import React, { useEffect } from 'react'

import s from './Variations.module.scss'
import { VariationsType } from './types'
import { VariationCard } from './variationCard'
import { API } from 'services/apiService'
import { cartSlice } from 'store/reducers/CartSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { productSlice } from 'store/reducers/ProductSlice'
import { getIdProduct } from 'store/selectors/selectors'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from 'store/store'

export const Variations: React.FC<VariationsType> = ({ setOpenPopUp }) => {
  const { data: variationsProperties, isSuccess: variationsPropertiesSuccess } = API.useFetchProductAllVariationsPropertiesQuery('')
  const dispatch = useAppDispatch()
  const productId = useAppSelector(getIdProduct)

  //fetch variations
  const { data: variationApi, isSuccess: variationSuccess } =
    API.useFetchProductAllVariationsQuery({
      filter: productId,
    })

  //add variations to store
  useEffect(() => {
    if (variationSuccess) {
      dispatch(productSlice.actions.variationsFetchingSuccess([variationApi, productId]))
    }
  }, [variationApi])

  const product = useAppSelector(state => state.productReducer.products.filter(item => item.id === productId ? item : "")[0])

  const addProductToCartCallback = (idVariation: number) => {
    if (product) {
      let variation = product.variations.filter(item => item.id === idVariation ? item : '')[0]
      dispatch(productSlice.actions.variationsAddInCart())
      dispatch(productSlice.actions.variationsAddInCartValue([productId, idVariation]))
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
        {variationsProperties
          && product.variations.map((item) =>
            <VariationCard
              key={item.id}
              setOpenPopUp={setOpenPopUp}
              variationsProperties={variationsProperties}
              productVariationId={item.id}
              callback={addProductToCartCallback}
              inCart={item.inCart}
              productId={productId}
            />
          )
        }
      </div>
    </>
  )
}
