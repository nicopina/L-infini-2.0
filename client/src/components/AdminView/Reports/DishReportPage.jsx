import TopNLeastSelled from "./TopNLeastSelled";
import TopNMostSelled from "./TopNMostSelled";
import { Card, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem, Row , Container, CardColumns} from "reactstrap";
import React from "react";

function DishReportPage(){
    const [number,setNumber] = React.useState(5);
    const [number_2,setNumber_2] = React.useState(5); 

    return (
        
        <div>
            <h1>Reporte de los platos</h1>
            <Row>
                <TopNMostSelled number = {[number,setNumber]}/>
                <TopNLeastSelled number_2 = {[number_2,setNumber_2]}/>
                
            </Row>
        </div>
        
    )
}

export default DishReportPage;
