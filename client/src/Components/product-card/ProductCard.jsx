import React, { useContext, useEffect } from "react";
import{Card} from 'reactstrap';

import "./ProductCard.css";

import { DataContext } from "../../Context/DataContext";
import { height } from "@mui/system";

const ProductCard = (props) => {

  const role = localStorage.getItem("role");
  const photo_default = "https://i.pinimg.com/originals/15/50/ee/1550ee86d49cbcc3f530ac53d538cd60.jpg";

  const { id, name, value, description, photo_url } = props.item;

  
  const valuee = useContext(DataContext);
  const addCarrito = valuee.addCarrito;

  return (
    // <div className="card">
      <Card className="card">
      <div className="face-front">
        <img src={photo_url || photo_default}/>

        <h6>{name}</h6>

        <div className="d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {/* {""} */}
            Price:<span>{"$"+value}</span>
          </span>
          {role === null ? (
          <button className="shopping_icon" onClick={() => addCarrito(id)}>
            <box-icon name="cart"></box-icon>
          </button>
          ) : "" }
        </div>
      </div>

      <div className="face-back d-flex align-items-center justify-content-between">
        <div className="description d-flex align-items-center">
          <p>{description}</p>
        </div>
      </div>
      </Card>
    // </div>
  );
};

export default ProductCard;
