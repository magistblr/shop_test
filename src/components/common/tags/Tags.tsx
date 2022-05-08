import React from 'react';

import { Tag } from './Tag';

import './Tags.scss';
import { categoryAPI } from 'services/CategoryService';

export const Tags: React.FC = () => {
  const { data: categories } = categoryAPI.useFetchSortRangeCategoriesQuery({
    name: '"name"',
    min: 0,
    max: 2,
  });

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
