import React from "react";

import "./ProductCard.css";
import { CardActionArea, Grid } from "@mui/material";
import { Card } from "reactstrap";



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
