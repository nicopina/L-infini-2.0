import React,{useContext} from "react";

import "./ProductCard.css";

import { DataContext } from "../../Context/DataContext";



const ProductCard = (props) => {
 
  const { id,title, imgUrl, price, description } = props.item;

  const value=useContext(DataContext);
  const addCarrito=value.addCarrito;
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
            <button className="shopping_icon" onClick={()=>addCarrito(id)}>
              <box-icon name='cart' type='solid'></box-icon>
            </button>
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
