import React, { useCallback, useEffect } from 'react';

import { Tag } from './Tag';

import './Tags.scss';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { categorySlice } from 'store/reducers/CategorySlice';
import { API } from 'services/apiService';


export const Tags: React.FC = () => {
  const categories = useAppSelector(state => state.categoryReducer.categories);
  const minRange = useAppSelector(state => state.categoryReducer.minRange);
  const maxRange = useAppSelector(state => state.categoryReducer.maxRange);
  const sort = useAppSelector(state => state.categoryReducer.sort);
  const idCategory = useAppSelector(state => state.categoryReducer.id);

  const dispatch = useAppDispatch();

  const { data: category } = API.useFetchSortRangeCategoriesQuery({
    sort: sort ? '"name"' : "",
    min: minRange,
    max: maxRange,
  });

  useEffect(() => {
    if (category) { dispatch(categorySlice.actions.categoriesFetchingSuccess(category)); }
  }, [category]);

  const changeId = useCallback((id: number) => {
    dispatch(categorySlice.actions.categoriesId(id))
  }, []);

  return (
    <ul className="wrapper_tags">
      {categories &&
        categories.map(category => (
          <li >
            <Tag
              key={category.id}
              id={category.id}
              callback={changeId}
              idCategory={idCategory}
            >
              {category.name}
            </Tag>
          </li>
        ))}
    </ul>
  );
};


