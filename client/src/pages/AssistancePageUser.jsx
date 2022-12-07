import TablesRequestsList from "../components/NewTableRequest/TablesRequestsList";
import NewTableRequest from "../components/NewTableRequest/NewTableRequest";
import BillAssistanceButton from "../components/NewTableRequest/BillAssistanceButton";
import { Row, Col } from "reactstrap";
import {useContext} from 'react';


function AssistancePageUser() {

  const tableId = localStorage.getItem("table");
  const rol = localStorage.getItem("role");

  //if role is null, dont show TablesRequestsList
  if (rol === null) {
    var showTablesRequestsList = false;
  } else {
    var showTablesRequestsList = true;
  }
  console.log("hola");

  return (
    <div>
      <h1 style={{color:'black',textAlign:'center',alignItems:'center'}}> Asistencia Mesa: {tableId}</h1>
      <Row>
        <Col>
          <NewTableRequest />
        </Col>

        <Col>
          <BillAssistanceButton />
        </Col>
      </Row>

      {showTablesRequestsList ? (
        <Row>
          <Col>
            <TablesRequestsList />
          </Col>
        </Row>
      ) : (
        <div></div>
      )}
      
    </div>
  );
}

export default AssistancePageUser;
