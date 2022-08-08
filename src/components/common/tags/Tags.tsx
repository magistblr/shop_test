import React, { useEffect } from 'react';

import { Tag } from './Tag';

import './Tags.scss';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { categoryAPI } from 'services/CategoryService';
import { categorySlice } from 'store/reducers/CategorySlice';


export const Tags: React.FC = () => {
  const categories = useAppSelector(state => state.categoryReducer.categories);
  const minRange = useAppSelector(state => state.categoryReducer.minRange);
  const maxRange = useAppSelector(state => state.categoryReducer.maxRange);
  const sort = useAppSelector(state => state.categoryReducer.sort);

  const dispatch = useAppDispatch();

  const { data: category } = categoryAPI.useFetchSortRangeCategoriesQuery({
    sort: sort ? '"name"' : "",
    min: minRange,
    max: maxRange,
  });

  useEffect(() => {
    if(category){dispatch(categorySlice.actions.categoriesFetchingSuccess(category));}
  }, [category]);

  return (
    <div className="wrapper_tags">
      {categories &&
        categories.map(category => (
          <Tag  key={category.id}
                id={category.id}>
            {category.name}
          </Tag>
        ))}
    </div>
  );
};


