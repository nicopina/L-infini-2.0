import React from "react";
import { useContext } from "react";
import "./Cart.css";

import { DataContext } from "../../Context/DataContext";

export const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const[total]=value.total;
  const togglefalse = () => {
    setMenu(false);
  };

  const removeProduct = (id) => {
    if (window.confirm("¿Quieres eliminar este producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };
  const resta = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCarrito([...carrito]);
    });
  };

  const suma = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCarrito([...carrito]);
    });
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito_close" onClick={togglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className="carrito_center">


          {
               carrito.length===0?<h2>Carrito vacio</h2>:<>
        {
          carrito.map((item) => (
            <div className="carrito_item" key={item.id}>
                
              <img src={item.imgUrl} alt="#" />
              <div>
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>
              </div>
              <div>
                <box-icon name="up-arrow" type="solid" onClick={()=>suma(item.id)}></box-icon>
                <p className="cantidad">{item.cantidad}</p>
                <box-icon name="down-arrow" type="solid" onClick={()=>resta(item.id)}></box-icon>
              </div>
              <div
                className="remove_item"
                onClick={() => removeProduct(item.id)}
              >
                <box-icon name="trash" type="solid"></box-icon>
              </div>
            </div>
          ))
        }
        </>
        }

          <div className="carrito_footer">
            <h3>Total: ${total}</h3>
            {total > 0 ? '<button className="btn">Confirmar Pedido</button>' : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
