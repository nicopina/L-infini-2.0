import { Row, Col } from "reactstrap";
import { deleteDishRequest } from "../../api/dishes.api";

import "./ItemDish.css";

function ItemDish(params) {
  function handlerDelete() {
    // console.log(params.dish.id);
    deleteDishRequest(params.dish.id).then((response) => {
      params.setSeed(params.seed + 1);
    });
  }
  return (
    <div className="dish-item">
      <Row
        style={{
          borderBottom: "1px solid black",
        }}
      >
        <Col>
          <img className="img" src={params.dish.photo_url} height='5px'/>            
        </Col>
        <Col className="dish-item-column-name">
          {params.dish.name}
          </Col>
        <Col className="dish-item-column-state">
          <input
            type="checkbox"
            checked={params.dish.is_active}
            onChange={() => params.changeState(params.dish)}
          />
        </Col>
        <Col className="dish-item-column-delete">
          <button className="delete-button" onClick={handlerDelete}>
            Eliminar
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default ItemDish;
