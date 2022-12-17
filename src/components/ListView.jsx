import React from 'react';
import ShopItem from './ShopItem';
import { nanoid } from 'nanoid';

export default function ListView({products}) {
return (
  <div className='ListView'>
    {products.map(item => <ShopItem key={nanoid()}  item={item}/>)}
  </div>
)
}