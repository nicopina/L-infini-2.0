import React from "react";

import "./ProductCard.css";

const ProductCard = (props) => {

    const {title,imgUrl,price} = props.item;
    return (
        <div className="single-product">

            <div className="product-img">
                <img src={imgUrl}  alt="#" className="w-100" />
            </div>


            <h6>{title}</h6>

            <div className="d-flex align-items-center justify-content-between">
                <span className="price d-flex align-items-center">
                    {""}
                    Price:$<span>{price}</span>
                </span>
            </div>


        </div>
    );
}

export default ProductCard;