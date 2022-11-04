import React, { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../Product-card/ProductCard";

import { DataContext } from "../../Context/DataContext";

const MenuPack = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  return (
    <section>
      <Container>
        <Row>
          {productos.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {""}
              <ProductCard item={item} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
