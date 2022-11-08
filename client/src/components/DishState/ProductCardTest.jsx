import { Checkbox } from "@mui/material";
import React from "react";
import {updateDishRequest} from "../../api/dishes.api";
import StateCheckbox from "./StateCheckbox";

import "./ProductCardTest.css";



const ProductCardTest = (props) => {
 
  const {id, title, photo_url, price, description, is_active} = props.item;
  var state = is_active;
  if (is_active) {
    state = true;
  } else {
    state = false;
  }

  return (
    <div className="card">
      <div className="face front">
        <img src={photo_url} alt="#" />

        <h6>{title}</h6>

        <div className="d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {""}
            Estado:
          </span>
            <StateCheckbox id = {id} state = {is_active}/>
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

export default ProductCardTest;
