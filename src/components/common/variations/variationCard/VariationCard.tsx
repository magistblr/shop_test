import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useFetchVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId, callback, disable }) => {
  const [count, setCount] = useState<number>(0)
  const [activeDisable, setActiveDisable] = useState<boolean>(disable)
  const dispatch = useAppDispatch()
  //TODO (убрать баг при переключении с главной на корзину и обратно, нельзя добавить товары в корзину)
  // const products = useAppSelector(state => state.productReducer.products.find(item => item.id === ))

  const { packageProduct, wide, color, height, length, size, weight, isSuccess } = useFetchVariation(productVariationId)
  const values = [packageProduct, wide, length, height, weight, size, color]

  useEffect(() => {
    if (isSuccess) {
      dispatch(productSlice.actions.variationsAddFetchValues([{ packageProduct, wide, color, height, length, size, weight }, productVariationId]))
    }
  }, [productVariationId, isSuccess, variationsProperties])

  const btnHandler = (id: number, disable: boolean) => {
    setActiveDisable(true)
    callback(id, disable, count)

    // setOpenPopUp(false)
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
        <Button outlined disabled={activeDisable} callback={() => btnHandler(productVariationId, true)}>
          {activeDisable ? `Добавлено` : `В корзину`}
        </Button>
      </div>
    </>
  )
}
