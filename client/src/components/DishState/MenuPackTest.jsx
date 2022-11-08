import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCardTest from "../DishState/ProductCardTest";
import { useState } from "react";

import  {getDishesRequest}  from "../../api/dishes.api";


const MenuPackTest = () => {
  const [dishes, setDishes] = useState([]);

  async function getDishes() {
    getDishesRequest().then((response) => {
      setDishes(response.data);
    });
  }

  getDishes();

  return (
    <section>
      <Container>
        <Row>
          {dishes.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {""}
              <ProductCardTest item={item} />{" "}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPackTest;
