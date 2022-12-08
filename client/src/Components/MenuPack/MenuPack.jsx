import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ProductCard from "../Product-card/ProductCard";

import { DataContext } from "../../Context/DataContext";
import Reload from "../Reload/Reload";

import "./MenuPack.css";

const MenuPack = () => {
  const value = useContext(DataContext);

  const [productos, setProductos] = useState([]);
  const [filter,setFilter] = useState(localStorage.getItem("filter"));

  useEffect(() => {
    value.menuCategorias[0].forEach(element => {
      if(element.name === filter){
        setProductos(value.productos[0].filter((item) => item.category === element.id));
      }
    });
    if(filter == '' || filter == null){
      setProductos(value.productos[0]);
    }
  }, [value]);


  useEffect(() => {
    localStorage.setItem("filter", filter);
    value.menuCategorias[0].forEach(element => {
      if(element.name === filter){
        setProductos(value.productos[0].filter((item) => item.category === element.id));
      }
    });
    if(filter === 'sinFiltro'){
      setProductos(value.productos[0]);
    }
  }, [filter]);

  return (
    <div className="menu">
      <h1 style={{color:'black'}}>Menú</h1>
      <Reload />
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5"> <h3>Categorías</h3> </Col>
          <Col lg="12" className="text-center mb-4">
            {
              value.menuCategorias[0].map((item, index) => (
                <Button key={index} outline color="primary" onClick={()=>setFilter(item.name)}>{item.name}</Button>
              ))
            }
            <Button outline color="primary" onClick={()=>setFilter('sinFiltro')}>Todo</Button>
          </Col>
          {productos.length === 0 ? (
            <Col lg="12" className="text-center mb-4">
              <h3>No hay platos en esta categoría.</h3>
            </Col>
          ) : ""}
          {productos.length > 0 ? (
          productos.map((item, index) => (
            <Col key={index} lg="3" md="4" sm="6" xs="6" className="mb-4">
              {""}
              <ProductCard item={item} />{" "}
            </Col>
          ))) : ""}
        </Row>
      </Container>
    </div>
  );
};

export default MenuPack;