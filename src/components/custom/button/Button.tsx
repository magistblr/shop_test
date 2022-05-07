import React from 'react';

import './Button.scss';
import { ButtonType } from './types';

export const Button: React.FC<ButtonType> = ({ children, ...props }) => {
  const { disabled, type, callback, loading, min, large, block, outlined, text } = props;
  const childrenElem = React.Children.toArray(children);

  const spinner = (
    <svg className="btn__spinner" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="15" fill="none" strokeWidth="4" />
    </svg>
  );
  const minStyle = min && 'btn_min';
  const largeStyle = large && 'btn_large';
  const blockStyle = block && 'btn_block';
  const outlinedStyle = outlined && 'btn_outlined';
  const textStyle = text && 'btn_text';
  const contentButton = 0;

  return (
    <div className="button">
      <button
        type="button"
        onClick={callback}
        className={`btn ${
          type || 'primary'
        } ${minStyle} ${largeStyle} ${blockStyle} ${outlinedStyle} ${textStyle}`}
        disabled={disabled}
      >
        {loading ? (
          spinner
        ) : (
          <div className="btn__content">{childrenElem[contentButton]}</div>
        )}
      </button>
    </div>
  );
};
