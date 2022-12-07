import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../Product-card/ProductCard";

import { DataContext } from "../../Context/DataContext";
import Reload from "../Reload/Reload";

import "./MenuPack.css";

const MenuPack = () => {
  const value = useContext(DataContext);

  const [productos, setProductos] = useState([]);
  const [filter,setFilter] = useState('Comidas');


  useEffect(() => {
    console.log(value.productos[0].filter((item) => item.category === 1));
    setProductos(value.productos[0]);
  }, [value]);


  useEffect(() => {
    if(filter === 'Comidas'){
      setProductos(value.productos[0].filter((item) => item.category === 1));
    }else if(filter === 'Bebidas'){
      setProductos(value.productos[0].filter((item) => item.category === 3));
    }else if(filter === 'Postres'){
      setProductos(value.productos[0].filter((item) => item.category === 6));
    }
  }, [filter]);

  return (
    <div className="menu">
      <h1 style={{color:'black'}}>Menú</h1>
      <Reload />
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5"> <h3>Menu Filtro</h3> </Col>
          <Col lg="12" className="text-center mb-4">
            <button className="btn" onClick={()=>setFilter('Bebidas')}>Bebidas</button>
            <button className="btn" onClick={()=>setFilter('Comidas')}>Comidas</button>
            <button className="btn" onClick={()=>setFilter('Postres')}>Postres</button>
          </Col>
          {productos.map((item, index) => (
            <Col key={index} lg="3" md="4" sm="6" xs="6" className="mb-4">
              {""}
              <ProductCard item={item} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MenuPack;
