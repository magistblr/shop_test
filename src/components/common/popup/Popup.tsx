import React from 'react'

import s from './Popup.module.scss'
import { PopupType } from './types'

export const Popup: React.FC<PopupType> = ({ setOpenPopup, component, openPopup }) => {
  const styleActive = `${s.wrapper_output} ${s.active}`

  return (
    <div className={openPopup ? styleActive : s.wrapper_output} onClick={() => setOpenPopup(false)}>
      <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}
