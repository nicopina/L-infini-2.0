import {
  Form,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Table,
} from "reactstrap";
import { getOrderItemsTopWorstN } from "../../../api/orderItems.api";
import React, { useEffect } from "react";
import TableDishReport from "./TableDishReport";

function TopNLeastSelled(params) {
  const [number_2, setNumber_2] = React.useState(params.number_2);

  const [seed, setSeed] = React.useState(0);
  const [top, setTop] = React.useState([]);

  useEffect(() => {

    getOrderItemsTopWorstN(number_2).then((response) => {
      setTop(response.data);
    });
    // setSeed(Math.floor(Math.random() * 20));
  }, [number_2]);

  function handlerOnChange(event) {

    setNumber_2(event.target.value);
  }

  var cont = 1;
  return (
    <Card key="top5worst">
      <CardBody key="bodyWorst">
        <CardHeader>
          <CardTitle>Top platos menos vendidos</CardTitle>
          <Form>
            <label>Seleccione la cantidad de platos del Top &nbsp; </label>
            <select
              onChange={handlerOnChange}
              name="n_worst"
              multiple={false}
              id="n_dishes_worst"
              defaultValue={number_2[0]}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </Form>
        </CardHeader>

        <TableDishReport top={top} />
      </CardBody>
    </Card>
  );
}

export default TopNLeastSelled;
