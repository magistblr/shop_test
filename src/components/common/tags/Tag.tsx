import React from 'react';
import { COLOR_BUTTON } from 'utils/constans';
import { randomSortArray } from 'utils/randomSortArray';

import './Tag.scss';

export const Tag: React.FC = React.memo(({ children }) => {
  const type = randomSortArray(COLOR_BUTTON)
  return (
    <div className="wrapper">
      <div className={`common ${type}`}>{children}</div>
    </div>
  );
})