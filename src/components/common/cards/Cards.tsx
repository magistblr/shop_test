import React, { useEffect } from 'react'

import './Cards.scss'
import { Card } from './card/Card'

import { useAppSelector, useAppDispatch } from 'hooks/redux'
import { API } from 'services/apiService'
import { productSlice } from 'store/reducers/ProductSlice'
import { getIdCategory, getMaxRangeProduct, getMinRangeProduct, getSortProducts } from 'store/selectors/selectors'

export const Cards: React.FC = () => {
  const minRangeProduct = useAppSelector(getMinRangeProduct)
  const maxRangeProduct = useAppSelector(getMaxRangeProduct)
  const sortProducts = useAppSelector(getSortProducts)
  const idCategory = useAppSelector(getIdCategory)

  const dispatch = useAppDispatch()

  const { data: product, isSuccess } = API.useFetchSortRangeFilterProductsQuery({
    sort: sortProducts ? '"name"' : '',
    filter: idCategory,
    min: minRangeProduct,
    max: maxRangeProduct,
  })

  useEffect(() => {
    if (product) {
      dispatch(productSlice.actions.productsFetchingSuccess(product))
    }
  }, [product])


  return (
    <div className="wrapper_tags">
      {isSuccess &&
        product.map(product => (
          <Card
            key={product.id}
            id={product.id}
            categoryId={idCategory}
            description={product.description}
            productId={product.id}
            inCart={product.inCart}
          >
            {product.name}
          </Card>
        ))}
    </div>
  )
}
