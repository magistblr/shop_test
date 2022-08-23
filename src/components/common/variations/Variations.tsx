import { Button } from 'components/custom/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

import s from './Variations.module.scss'
import { VariationsType } from './types'
import { VariationCard } from './variationCard'
import { API } from 'services/apiService'

export const Variations: React.FC<VariationsType> = ({ setOpenPopUp, variations }) => {
  // const [openPopUp, setOpenPopUp] = useState(false)

  const dispatch = useAppDispatch()

  const { data: variationsProperties, isSuccess: variationsPropertiesSuccess } = API.useFetchProductAllVariationsPropertiesQuery('')
  // useEffect(() => {
  //   if (variationSuccess) {
  //     dispatch(productSlice.actions.variationsFetchingSuccess([variationApi, productId]))
  //   }
  // }, [variationSuccess])
  console.log(variations);


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
            />
          )
        }
      </div>
    </>
  )
}
