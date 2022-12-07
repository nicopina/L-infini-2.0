import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Card, Row, Col } from "reactstrap";
import {
  getDishesRequest,
  getDishRequest,
  updateDishRequest,
} from "../../api/dishes.api";
import ItemDish from "./ItemDish";

function Dishes() {
  const [dishes, setDishes] = useState([]);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    getDishesRequest().then((response) => {
      setDishes(response.data);
    });
  }, []);

  useEffect(() => {
    getDishesRequest().then((response) => {
        setDishes(response.data);
        });
    }, [seed]);

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
      <h1 style={{color:'black'}}>Platos</h1>
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
          <Col></Col>
          <Col>Plato</Col>
          <Col>Estado</Col>
          <Col>Eliminar</Col>
        </Row>
        {dishes.map((dish, index) => (
          <ItemDish dish={dish} changeState={changeState} key={index} setSeed={setSeed}/>
        ))}
      </Card>
    </div>
  );
}

export default Dishes;
