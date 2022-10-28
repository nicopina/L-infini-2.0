import React,{useContext} from "react";

import "./Header.css";

import { DataContext } from "../Contexto/DataContext";
export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;


  const toggleMenu = () => {
    setMenu(!menu);
    
  }
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
      <div className="cart" onClick={toggleMenu}>
        <box-icon name="cart" type="solid"></box-icon>
        <span className="item_total">3</span>
      </div>
    </header>
  );
};
