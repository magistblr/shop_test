import React from 'react';
import { Tag } from './Tag';


export const Tags = () => {


  return (
    <div className='wrapper'>
        <Tag type="blue">Игрушка</Tag>
        <Tag type="green">Мартышка</Tag>
        <Tag type="yellow">Мишка</Tag>
        <Tag type="pink">Подарок</Tag>
        <Tag type="yellow">Подарок коллегам</Tag>
        <Tag type="outlined">День Рождения Гриши</Tag>
    </div>
  );
}
