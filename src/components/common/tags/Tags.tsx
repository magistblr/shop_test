import React, { useEffect } from 'react';

import { Tag } from './Tag';

import './Tags.scss';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { categoryAPI } from 'services/CategoryService';
import { categorySlice } from 'store/reducers/CategorySlice';
import { randomSortArray } from 'utils/randomSortArray';
import { COLOR_BUTTON } from 'utils/constans';


export const Tags: React.FC = () => {
  const categories = useAppSelector(state => state.categoryReducer.categories);
  const dispatch = useAppDispatch();
  const { data: categor } = categoryAPI.useFetchSortRangeCategoriesQuery({
    sort: '"name"',
    min: 0,
    max: 2,
  });
  console.log(categories);
  useEffect(() => {
    if(categor){dispatch(categorySlice.actions.categoriesFetchingSuccess(categor));}
  }, [categor]);

  return (
    <div className="wrapper_tags">
      {categories &&
        categories.map(category => (
          <Tag key={category.id}>
            {category.name}
          </Tag>
        ))}
    </div>
  );
};
function categoriesFetchingSuccess(categoriesFetchingSuccess: any) {
  throw new Error('Function not implemented.');
}

