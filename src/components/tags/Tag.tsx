import React from 'react';
import './Tag.scss';

export type TagType = {
  type?: "green" | "blue" | "yellow" | "pink" | "outlined"
}

export const Tag: React.FC<TagType> = ({children, type}) => {


  return (
    <div className='wrapper'>
      <div className={`common ${type}`}>
        {children}
      </div>
    </div>
  );
}
