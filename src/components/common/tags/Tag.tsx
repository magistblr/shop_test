import React, { useState } from 'react';
import { COLOR_BUTTON } from 'utils/constans';
import { randomSortArray } from 'utils/randomSortArray';

import './Tag.scss';
import { TagType } from './types';

export const Tag: React.FC<TagType> = React.memo(({ children, callback, id, idCategory }) => {
  const [click, setClick] = useState(false)
  console.log(idCategory);


  const type = click && (id === idCategory) ? "outlined" : randomSortArray(COLOR_BUTTON)

  const onClickHandler = (id: number) => {
    setClick(!click)
    callback(id)
  }

  return (
    <div className="wrapper">
      <div className={`common ${type}`} onClick={() => onClickHandler(id)}>{children}</div>
    </div>
  );
})