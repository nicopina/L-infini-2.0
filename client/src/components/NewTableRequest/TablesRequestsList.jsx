import React from 'react';
import { getRequests } from '../../api/requests.api';
import { Container, Row, Col } from "reactstrap";

function getTablesRequests() {
  const response = getRequests();
  if (response.status === 200) {
    console.log(response.data);
    return response.data;
  }
}

function TablesRequestsList() {

    const data = getTablesRequests();
  return (
    <section>
      <Container>
        <Row>
          {data.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {""}
            
            </Col>
          ))}
        </Row>
      </Container>
    </section>
);};

export default TablesRequestsList;
