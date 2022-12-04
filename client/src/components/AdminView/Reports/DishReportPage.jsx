import TopNLeastSelled from "./TopNLeastSelled";
import TopNMostSelled from "./TopNMostSelled";
import { Card, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem, Row , Container, CardColumns} from "reactstrap";
import React from "react";
import DishMostSelledTimeRange from "./DishMostSelledTimeRange";

function DishReportPage(){

    //Function add days to today
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    const [number,setNumber] = React.useState(5);
    const [number_2,setNumber_2] = React.useState(5); 

    const [fechas,setFechas] = React.useState({

        fecha_inicial: addDays(new Date(), -7),
        fecha_final: addDays(new Date(), 1)
    });

    return (
        
        <div>
            <h1>Reporte de los platos</h1>
            
                <TopNMostSelled number = {[number,setNumber]}/>
                <TopNLeastSelled number_2 = {[number_2,setNumber_2]}/>
                <DishMostSelledTimeRange fechas = {fechas}/>
        </div> 
    )
}

export default DishReportPage;
