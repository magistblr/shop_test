import React, { useEffect } from 'react';

import { Tag } from './Tag';

import './Tags.scss';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { categoryAPI } from 'services/CategoryService';

export const Tags: React.FC = () => {
  const categories = useAppSelector(state => state.categoryReducer.categories);
  const dispatch = useAppDispatch();
  const { data: categor } = categoryAPI.useFetchSortRangeCategoriesQuery({
    sort: '"name"',
    min: 0,
    max: 2,
  });
  useEffect(() => {
    dispatch(categor);
  }, []);
  return (
    <div className="wrapper_tags">
      {categories &&
        categories.map(category => (
          <Tag key={category.id} type="blue">
            {category.name}
          </Tag>
        ))}
    </div>
  );
};
