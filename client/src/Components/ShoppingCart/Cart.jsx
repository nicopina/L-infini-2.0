import React from "react";
import { useContext } from "react";
import Image from "../../public/images/burger1.png";
import "./Cart.css";

import{DataContext} from "../Contexto/DataContext";



export const Cart = () => {
    const value=useContext(DataContext);
    const[menu,setMenu]=value.menu;

    const togglefalse=()=>{
        setMenu(false);
    }


    const show1=menu? "carritos show":"carritos";
    const show2=menu? "carrito show":"carrito";

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito_close" onClick={togglefalse}>
            <box-icon name='x'></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className="carrito_center">


            <div className="carrito_item">
                <img src={Image} alt='#'/>
                <div>
                    <h3>Hambuerguesa Extra Quesa XL</h3>
                    <p className="price">$345</p>
                </div>
                <div>
                    <box-icon name='up-arrow' type='solid'></box-icon>
                    <p className="cantidad">1</p>
                    <box-icon name='down-arrow' type='solid'></box-icon>
                </div>
                <div className="remove_item">
                    <box-icon name="trash" type='solid'></box-icon>
                </div>
            </div>

            <div className="carrito_item">
                <img src={Image} alt='#'/>
                <div>
                    <h3>Hambuerguesa Extra Quesa XL</h3>
                    <p className="price">$345</p>
                </div>
                <div>
                    <box-icon name='up-arrow' type='solid'></box-icon>
                    <p className="cantidad">1</p>
                    <box-icon name='down-arrow' type='solid'></box-icon>
                </div>
                <div className="remove_item">
                    <box-icon name="trash" type='solid'></box-icon>
                </div>
            </div>




            <div className="carrito_item">
                <img src={Image} alt='#'/>
                <div>
                    <h3>Hambuerguesa Extra Quesa XL</h3>
                    <p className="price">$345</p>
                </div>
                <div>
                    <box-icon name='up-arrow' type='solid'></box-icon>
                    <p className="cantidad">1</p>
                    <box-icon name='down-arrow' type='solid'></box-icon>
                </div>
                <div className="remove_item">
                    <box-icon name="trash" type='solid'></box-icon>
                </div>
            </div>






            <div className="carrito_footer">
                <h3>Total: $2334</h3>
                <button className="btn">Confirmar Pedido</button>    
            </div>
        </div>
      </div>
    </div>
  );
};
