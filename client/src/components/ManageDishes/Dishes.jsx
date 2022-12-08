import { Grid } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { Card, Row, Col } from "reactstrap";
import {
  getDishesRequest,
  getDishRequest,
  updateDishRequest,
} from "../../api/dishes.api";
import ItemDish from "./ItemDish";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import "./Dishes.css";

function Dishes() {
  const [dishes, setDishes] = useState([]);
  const [seed, setSeed] = useState(0);
  const [user] = useContext(UserContext);

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
    const newDishUpdate = {
      is_active: !dish.is_active,
    };
    updateDishRequest(dish.id, newDishUpdate).then((response) => {
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
      <h1 style={{ color: "black" }}>Platos</h1>
      {user.role == 1 ? (
        <div className="Dishes-buttons__container">
          <div className="Dishes-buttons__container-row">
            <Link className="Dishes__button" to="/modificarPlatos">
              Gestionar platos
            </Link>
            <Link className="Dishes__button" to="/registroPlatos">
              Registrar plato
            </Link>
          </div>
          <div className="Dishes-buttons__container-row">
            <Link className="Dishes__button" to="/modificarCategoriaPlatos">
              Gestionar Categoria de Plato
            </Link>
            <Link className="Dishes__button" to="/registroCategoriaPlatos">
              Registrar Categoria de Plato
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
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
          <ItemDish
            dish={dish}
            changeState={changeState}
            key={index}
            setSeed={setSeed}
          />
        ))}
      </Card>
    </div>
  );
}

export default Dishes;
