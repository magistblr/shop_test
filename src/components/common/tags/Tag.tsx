import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useState, useEffect } from 'react';
import { categorySlice } from 'store/reducers/CategorySlice';
import { COLOR_BUTTON } from 'utils/constans';
import { randomSortArray } from 'utils/randomSortArray';

import './Tag.scss';
import { TagType } from './types';

export const Tag: React.FC<TagType> = React.memo(({ children, id }) => {
  const [click, setClick] = useState(false)
  const [disable, setDisable] = useState(false)

  const idCategory = useAppSelector(state => state.categoryReducer.id)
  console.log(id);
  console.log(idCategory);

  const dispatch = useAppDispatch()


  const type = click && (id === idCategory) ? "outlined" : randomSortArray(COLOR_BUTTON)

  const onClickHandler = (id: number) => {
    dispatch(categorySlice.actions.categoriesId(id))
    setClick(!click)
    // callback(id)
  }



  return (
    <div className="wrapper">
      <div className={disable ? `common ${type} disable` : `common ${type}`} onClick={() => onClickHandler(id)}>{children}</div>
    </div>
  );
})