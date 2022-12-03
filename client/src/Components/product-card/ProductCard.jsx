import React, { useContext, useEffect } from "react";

import "./ProductCard.css";

import { DataContext } from "../../Context/DataContext";

const ProductCard = (props) => {

  const photo_default = "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg";

  const { id, name, value, description, photo_url } = props.item;

  
  const valuee = useContext(DataContext);
  const addCarrito = valuee.addCarrito;

  return (
    <div className="card">
      <div className="face-front">
        <img src={photo_url || photo_default} alt="#" />

        <h6>{name}</h6>

        <div className="d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {""}
            Price:$<span>{value}</span>
          </span>
          <button className="shopping_icon" onClick={() => addCarrito(id)}>
            <box-icon name="cart"></box-icon>
          </button>
        </div>
      </div>

      <div className="face-back d-flex align-items-center justify-content-between">
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
