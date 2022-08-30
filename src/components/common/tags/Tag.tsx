import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useState, useEffect } from 'react';
import { categorySlice } from 'store/reducers/CategorySlice';
import { COLOR_BUTTON } from 'utils/constans';
import { randomSortArray } from 'utils/randomSortArray';

import './Tag.scss';
import { TagType } from './types';

export const Tag: React.FC<TagType> = React.memo(({ children, id, type }) => {
  const [click, setClick] = useState(false)
  const [disable, setDisable] = useState(false)

  const idCategory = useAppSelector(state => state.categoryReducer.id)

  const dispatch = useAppDispatch()

  const typeColor = click && (id === idCategory) ? "outlined" : type

  const onClickHandler = (id: number) => {
    dispatch(categorySlice.actions.categoriesId(id))
    setClick(true)
  }

  useEffect(() => {
    if (click) {
      setDisable(false)
    }
    return () => { setDisable(true) }
  }, [click])

  return (
    <div className="wrapper">
      <div className={disable ? `common ${typeColor} disable` : `common ${typeColor}`} onClick={() => onClickHandler(id)}>{children}</div>
    </div>
  );
})