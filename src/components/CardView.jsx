import React from "react";
import { nanoid } from "nanoid";
import ShopCard from './ShopCard'

export default function CardView({products}) {
  return(
    <div className='cardView'>
      {products.map(item => <ShopCard key={nanoid()}  item={item}></ShopCard>)}
    </div>
  )
}