import React from 'react';

import './Tag.scss';
import { TagType } from './types';

export const Tag: React.FC<TagType> = ({ children, type }) => (
  <div className="wrapper">
    <div className={`common ${type}`}>{children}</div>
  </div>
);
