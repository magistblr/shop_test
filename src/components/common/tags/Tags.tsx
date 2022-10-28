import React, { useCallback, useEffect } from 'react'

import { Tag } from './Tag'

import './Tags.scss'
import { useAppSelector, useAppDispatch } from 'hooks/redux'
import { API } from 'services/apiService'
import { categorySlice } from 'store/reducers/CategorySlice'
import { COLOR_BUTTON } from 'utils/constans'
import { randomSortArray } from 'utils/randomSortArray'

export const Tags: React.FC = () => {
  const categories = useAppSelector(state => state.categoryReducer.categories)
  const minRange = useAppSelector(state => state.categoryReducer.minRange)
  const maxRange = useAppSelector(state => state.categoryReducer.maxRange)
  const sort = useAppSelector(state => state.categoryReducer.sort)

  const dispatch = useAppDispatch()

  const { data: category } = API.useFetchSortRangeCategoriesQuery({
    sort: sort ? '"name"' : '',
    min: minRange,
    max: maxRange,
  })

  useEffect(() => {
    if (category) {
      dispatch(categorySlice.actions.categoriesFetchingSuccess(category))
    }
  }, [category])

  const changeId = useCallback((id: number) => {
    dispatch(categorySlice.actions.categoriesId(id))
  }, [])

  return (
    <ul className="wrapper_tags">
      {categories &&
        categories.map((category) => (
          <li key={category.id}>
            <Tag
              id={category.id}
              callback={changeId}
              type={randomSortArray(COLOR_BUTTON)}
            >
              {category.name}
            </Tag>
          </li>
        ))}
    </ul>
  )
}
