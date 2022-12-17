import React from "react";

export default function ShopCard({item}) {
  const {name, color, price, img} = item;
  return(
    <div className="shopCard">
      <div className="text_shopCard">
        <h2 className="name">{name}</h2>
        <span className="color">{color}</span>
        <div className="priceButton_shopCard">
          <span className="price">${price}</span>
          <button className="button">Add to cart</button>
        </div>
      </div>
      <img className="image_shopCard" src={img} alt={`${name}, ${color}`}/>
    </div>
  )
}