import { Button } from 'components/custom/button/Button'
import { useAppDispatch } from 'hooks/redux'
import React, { useEffect } from 'react'

import s from './VariationCard.module.scss'
import { VariationCardType } from './types'
import { useFetchVariation } from 'hooks/useVariation/useVariation'
import { productSlice } from 'store/reducers/ProductSlice'
import { mathMinusPercent } from 'utils/mathsFunctions'

export const VariationCard: React.FC<VariationCardType> = ({ setOpenPopUp, variationsProperties, productVariationId, callback, inCart, price }) => {
  const dispatch = useAppDispatch()

  const { valuesArr, valuesObj, isSuccess } = useFetchVariation(productVariationId, true)

  useEffect(() => {
    if (isSuccess) {
      dispatch(productSlice.actions.variationsAddFetchValues([valuesObj, productVariationId]))
    }
  }, [productVariationId, isSuccess, variationsProperties])

  const btnHandler = (id: number) => {
    callback(id)
    setOpenPopUp(false)
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.variations_wrapper}>
          <div className={s.variations_name}>
            {variationsProperties.map(property =>
              <p key={property.id}>{property.name} </p>
            )}
          </div>
          <div className={s.variations_value}>
            {valuesArr.map((value, index) =>
              <p key={index}>{value} </p>
            )}
          </div>
        </div>
        <div className={s.price_wrapper}>
          <p className={s.variations_name}>Цена: </p>
          <p className={s.variations_value}>{mathMinusPercent(price, 10)} ₽</p>
        </div>
        <Button outlined disabled={inCart} callback={() => btnHandler(productVariationId)}>
          {inCart ? `Добавлено` : `В корзину`}
        </Button>
      </div>
    </>
  )
}
