/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Settings } from '../settings';

import s from './Popup.module.scss';
import { PopupType } from './types';

export const Popup: React.FC<PopupType> = ({ setOpenPopup, children }) => {
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
      {children}
    </div>
  );
};
