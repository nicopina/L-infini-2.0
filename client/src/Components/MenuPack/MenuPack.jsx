import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../Product-card/ProductCard";

import { DataContext } from "../../Context/DataContext";
import Reload from "../Reload/Reload";

const MenuPack = () => {
  const value = useContext(DataContext);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(value.productos[0]);
  }, [value]);

  return (
    <>
      <section>
        <Reload />
        <Container>
          <Row>
            {productos.map((item, index) => (
              <Col key={index} lg="3" md="4" sm="6" xs="6" className="mb-4">
                {""}
                <ProductCard item={item} />{" "}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MenuPack;
