import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>

        <li>
          <a href="#">Soza</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart" type="solid"></box-icon>
        <span className="item_total">3</span>
      </div>
    </header>
  );
};
