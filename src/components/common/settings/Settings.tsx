/* eslint-disable jsx-a11y/control-has-associated-label */
import { Button } from 'components/custom/button/Button';
import { Checkbox } from 'components/custom/checkbox/Checkbox';
import MultiRangeSlider from 'components/custom/multiRangeSlider/MultiRangeSlider';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { categorySlice } from 'store/reducers/CategorySlice';

import s from './Settings.module.scss';
import { SettingsType } from './types';

export const Settings: React.FC<SettingsType> = ({ setOpenPopup }) => {
  const [rangeMin, setRangeMin] = useState(0)
  const [rangeMax, setRangeMax] = useState(24)
  const [checked, setChecked] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  const onChange = (check: boolean) => {
    setChecked(check)
  }

  const btnClose = () => {
    setOpenPopup(false)
    dispatch(categorySlice.actions.categoriesMax(rangeMax))
    dispatch(categorySlice.actions.categoriesMin(rangeMin))
    dispatch(categorySlice.actions.categoriesSort(checked))
    dispatch(categorySlice.actions.categoriesChecked(checked))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.checkbox}>
        <span>Сортировать по алфавиту</span>
        <Checkbox onChangeChecked={onChange} />
      </div>
      <div>
        <div>
          <MultiRangeSlider
            min={0}
            max={30}
            onChange={({ min, max }: { min: number; max: number }) => {
              setRangeMin(min)
              setRangeMax(--max)
            }
            }
          />
        </div>
      </div>
      <Button callback={() => btnClose()}>
        Применить
      </Button>
    </div >
  );
};
