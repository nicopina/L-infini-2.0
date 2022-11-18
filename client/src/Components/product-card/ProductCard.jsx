import React,{useContext} from "react";

import "./ProductCard.css";

import { DataContext } from "../../Context/DataContext";



const ProductCard = (props) => {
 
  const { id,namee,valuee,descriptionn,imageUrl } = props.item;

  const value=useContext(DataContext);
  const addCarrito=value.addCarrito;
  return (
    <div className="card">
      <div className="face-front">
        <img src={imageUrl} alt="#" />

        <h6>{namee}</h6>

        <div className="d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {""}
            Price:$<span>{valuee}</span>
          </span>
            <button className="shopping_icon" onClick={()=>addCarrito(id)}>
              <box-icon name='cart'></box-icon>
            </button>
        </div>
      </div>

      <div className="face-back d-flex align-items-center justify-content-between">
        <div className="description d-flex align-items-center">
          <p>{descriptionn}</p>
        </div>
        <div className="link">
          <a href="#">description</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
