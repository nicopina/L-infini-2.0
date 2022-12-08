import { useState, useEffect, useContext } from "react";
import { Card } from "reactstrap";
import { DataContext } from "../../Context/DataContext";

import "./CartView.css";

function CartView() {
  const [cart, setCart] = useState([]);

  useEffect(() => {}, []);
  return (
    <div className="CartView">
      <h1>Carrito</h1>
      <Card>
        {cart?.map((item, index) => (
          <div key={index} className="CartView__card">
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <h1>${item.value}</h1>
            <h1>Cantidad {item.quantity}</h1>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default CartView;
