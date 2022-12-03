import { Button, Card, CardBody, CardHeader, CardTitle, Form, ListGroup, ListGroupItem } from "reactstrap";
import { getOrderItemsTopBestN } from "../../../api/orderItems.api";
import React, { useEffect } from "react";



function TopNMostSelled(){

    const [number, setNumber] = React.useState(5);

    const [seed, setSeed] = React.useState(0);

    var getTop = async function getTopN(){
        const response = await getOrderItemsTopBestN(number);
        console.log("Hola" + number);
        return response.data;
    }

    useEffect(() => {

        setSeed(Math.floor(Math.random() * 20));
    }, [number, getTop]);

    const [top, setTop] = React.useState([]);

    useEffect(() => {
        getTop().then((response) => {
            setTop(response);
        });
    }, []);

    console.log(top);

    var cont = 1;
    return(
        <Card>
  
            <CardBody>
            <CardHeader>   
                <CardTitle>Top platos más vendidos</CardTitle>
                <Form>
                    <label>Seleccione la cantidad de platos del Top &nbsp; </label>
                    <select onChange={(event)=> setNumber(event.target.value)} name="n" id="n_dishes" defaultValue={number}>

                        <option value="5">5</option>
                        <option value="1">10</option>
                        <option value="0">20</option>
                    </select>
                    
                </Form>
            </CardHeader>

            <ListGroup>
                {top?.map(item => <ListGroupItem key = {item.id}> {cont++}.- {item.name} {item.quantity}</ListGroupItem>)}
            </ListGroup>

            </CardBody>

            
        </Card>

    );

}

export default TopNMostSelled;