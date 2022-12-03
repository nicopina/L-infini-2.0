import { Card, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { getOrderItemsTopWorstN } from "../../../api/orderItems.api";
import React, { useEffect } from "react";



function DishMostSelledTimeRange(){

    const [top, setTop] = React.useState([]);

    useEffect(() => {
        getOrderItemsTopWorstN(3).then((response) => {
            setTop(response);
        });
    }, []);

    console.log(top);

    var cont = 1;
    return(
        <Card>
  
            <CardBody>
            <CardHeader>   
                <CardTitle>Top 5 platos más vendidos la semana del</CardTitle>

            </CardHeader>

            <ListGroup>
                {top?.map(item => <ListGroupItem key = {item.id}> {cont++}.- {item.name} {item.quantity}</ListGroupItem>)}
            </ListGroup>

            </CardBody>

            
        </Card>

    );

}
