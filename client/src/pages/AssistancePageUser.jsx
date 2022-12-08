import TablesRequestsList from "../components/NewTableRequest/TablesRequestsList";
import { Row, Col } from "reactstrap";
import {useContext} from 'react';
import UserAssistanceButtons from "../components/UserAssistanceButtons/UserAssistanceButtons";

function AssistancePageUser() {

  const tableId = localStorage.getItem("table");
  const rol = localStorage.getItem("role");

  //if role is null, dont show TablesRequestsList
  if (rol === null) {
    var showTablesRequestsList = false;
  } else {
    var showTablesRequestsList = true;
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
      <h1 style={{color:'black',textAlign:'center',alignItems:'center'}}> Asistencia Mesa: {tableId}</h1>
      <UserAssistanceButtons />

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
