import React, { useState } from 'react';
import { COLOR_BUTTON } from 'utils/constans';
import { randomSortArray } from 'utils/randomSortArray';

import './Tag.scss';
import { TagType } from './types';

export const Tag: React.FC<TagType> = React.memo(({ children, id }) => {
  const [click, setClick] = useState(false)
  const type = click ? "outlined" : randomSortArray(COLOR_BUTTON)
  return (
    <div className="wrapper">
      <div className={`common ${type}`} onClick={()=> setClick(!click)}>{children}</div>
    </div>
  );
})