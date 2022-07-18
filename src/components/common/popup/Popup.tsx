/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import s from './Popup.module.scss';
import { PopupType } from './types';

export const Popup: React.FC<PopupType> = ({ setOpenPopup }) => {
  const sortRef = React.useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: any): void => {
    const { path } = event;
    if (!path.includes(sortRef.current)) {
      setOpenPopup(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className={s.wrapper} ref={sortRef}>
      <div>
        Сортировать по алфавиту
        <input type="checkbox" />
      </div>
      Выберите категории
      <button type="button" onClick={() => setOpenPopup(false)}>
        Применить
      </button>
    </div>
  );
};
