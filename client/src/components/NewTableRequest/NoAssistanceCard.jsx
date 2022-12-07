import react from "react";
import { Container, Row, Col, Card } from "reactstrap";

function NoAssistanceCard(){
    return (
        <div>
            <Card
                style={{
                    padding: "10px",
                    margin: "10px",
                }}
            >
                <Row>
                    <Col>
                        <h3>No hay solicitudes de asistencia</h3>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default NoAssistanceCard;