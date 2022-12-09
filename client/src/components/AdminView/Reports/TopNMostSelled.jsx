import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  ListGroup,
  ListGroupItem,
  Table,
} from "reactstrap";
import { getOrderItemsTopBestN } from "../../../api/orderItems.api";
import React, { useEffect } from "react";
import TableDishReport from "./TableDishReport";

function TopNMostSelled(params) {
  const [number, setNumber] = React.useState(params.number);

  const [seed, setSeed] = React.useState(0);
  const [top, setTop] = React.useState([]);

  useEffect(() => {

    getOrderItemsTopBestN(number).then((response) => {
      setTop(response.data);
    });
    // setSeed(Math.floor(Math.random() * 20));
  }, [number]);

  function handlerOnChange(event) {

    setNumber(event.target.value);
  }

  return (
    <Card key="top5">
      <CardBody key="body">
        <CardHeader>
          <CardTitle>Top platos más vendidos</CardTitle>
          <Form>
            <label>Seleccione la cantidad de platos del Top &nbsp; </label>
            <select
              onChange={handlerOnChange}
              name="n"
              multiple={false}
              id="n_dishes"
              defaultValue={number[0]}
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

export default TopNMostSelled;
