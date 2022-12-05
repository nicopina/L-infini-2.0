import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import WaiterAssistanceButton from "./WaiterAssistanceButton";

function TableRequest(props) {
  const request = props.datos;
  let date = new Date(request.created_at);
  let hour =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  let state;
  switch (request.state) {
    case 0:
      state = "Pendiente";
      break;
    case 1:
      state = "En proceso";
      break;
    case 2:
      state = "Finalizado";
      break;
  }

  let type = "";
  switch (request.type) {
    case 0:
      type = "Cuenta";
      break;
    case 1:
      type = "Asistencia";
      break;
  }

  return (
    <div>
      <Card
        key={request.id}
        style={{
          padding: "10px",
          margin: "10px",
        }}
      >
        <Row>
          <Col>Mesa: {request.table_id}</Col>
          <Col>Estado: {state}</Col>
          <Col>Tipo: {type}</Col>
          <Col>Hora: {hour}</Col>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <WaiterAssistanceButton data={request} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default TableRequest;
