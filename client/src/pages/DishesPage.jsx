import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Card, Row, Col } from "reactstrap";
import {
  getDishesRequest,
  getDishRequest,
  updateDishRequest,
} from "../api/dishes.api";

function DishesPage() {
  const [dishes, setDishes] = useState([]);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    getDishesRequest().then((response) => {
      setDishes(response.data);
    });
  }, []);

  const changeState = (dish) => {
    dish.is_active = !dish.is_active;
    updateDishRequest(dish.id, dish).then((response) => {
      setSeed(seed + 1);
    });
  };

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Platos</h1>
      <Card
        style={{
          padding: "0 10px 10px 10px",
          margin: "10px ",
          minWidth: "300px",
        }}
      >
        <Row
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <Col>Plato</Col>
          <Col>Estado</Col>
        </Row>
        {dishes.map((dish, index) => (
            <Row key={index} 
            style = {{
              borderBottom: "1px solid black",
            }}  
            >
              <Col>{dish.name}</Col>
              <Col>
                <input
                  type="checkbox"
                  checked={dish.is_active}
                  onChange={() => changeState(dish)}
                />
              </Col>
            </Row>
        ))}
      </Card>
    </div>
  );
}

export default DishesPage;
