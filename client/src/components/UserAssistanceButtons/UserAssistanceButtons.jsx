import NewTableRequest from "../NewTableRequest/NewTableRequest";
import BillAssistanceButton from "../NewTableRequest/BillAssistanceButton";
import { Row, Col } from "reactstrap";
import "./UserAssistanceButtons.css";

function UserAssistanceButtons() {
  return (
    <div className="UserAssistanceButtons__container">
      <Row>
        <Col>
          <NewTableRequest />
        </Col>
        <Col>
          <BillAssistanceButton />
        </Col>
      </Row>
    </div>
  );
}

export default UserAssistanceButtons;
