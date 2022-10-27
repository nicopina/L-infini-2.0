import React from "react";

import "./ProductCard.css";




const ProductCard = (props) => {
  const { title, imgUrl, price, description } = props.item;
  return (
    <div className="card">
      <div className="face front">
        <img src={imgUrl} alt="#" />

        <h6>{title}</h6>

        <div className="d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {""}
            Price:$<span>{price}</span>
          </span>
          <span className="shopping_icon"> 
            <box-icon name='cart' type='solid'></box-icon>
          </span>
        </div>
      </div>

      <div className="face back d-flex align-items-center justify-content-between">
        <div className="description d-flex align-items-center">
          <p>{description}</p>
        </div>
        <div className="link">
          <a href="#">description</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
