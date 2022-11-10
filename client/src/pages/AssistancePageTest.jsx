import TablesRequestsList from "../components/NewTableRequest/TablesRequestsList";
import NewTableRequest from "../components/NewTableRequest/NewTableRequest";
import BillAssistanceButton from "../components/NewTableRequest/BillAssistanceButton";
import { Row, Col } from "reactstrap";
import {useContext} from 'react';


function AssistancePageTest() {

  const tableId = localStorage.getItem("TableId");
  return (
    <div>
      <h1>Asistencia Mesa: {tableId}</h1>
      <Row>
        <Col>
          <NewTableRequest />
        </Col>

        <Col>
          <BillAssistanceButton />
        </Col>
      </Row>

      <TablesRequestsList />
    </div>
  );
}

export default AssistancePageTest;
