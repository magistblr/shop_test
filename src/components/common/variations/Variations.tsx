import React, { useEffect, useState } from 'react'

import s from './Variations.module.scss'
import { VariationsType } from './types'
import { VariationCard } from './variationCard'
import { API } from 'services/apiService'
import { cartSlice } from 'store/reducers/CartSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { useGetProductCart } from 'hooks/useGetProductCart/useGetProductCart'

export const Variations: React.FC<VariationsType> = ({ setOpenPopUp, variations, productId, id }) => {
  // const [openPopUp, setOpenPopUp] = useState(false)

  const { data: variationsProperties, isSuccess: variationsPropertiesSuccess } = API.useFetchProductAllVariationsPropertiesQuery('')
  const dispatch = useAppDispatch()

  const foo = (id: number) => {
    dispatch(cartSlice.actions.id(id))
  }
  //TODO
  const { productCart } = useGetProductCart(id, productId)
  console.log(productCart);

  // useEffect(() => console.log(id)
  //   , [id])

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
              productId={productId}
              callback={foo}
            />
          )
        }
      </div>
    </>
  )
}
