import React from "react";

export default function ShopItem({item}) {
  const {name, color, price, img} = item;

  return(
    <div className="shopItem">
      <h2>{name}</h2>
      <span className="color">{color}</span>
      <img className="image_shopItem" src={img} alt={`${name}, ${color}`}></img>
      <span className="price">${price}</span>
      <button className="button">Add to cart</button>
    </div>
  )
}