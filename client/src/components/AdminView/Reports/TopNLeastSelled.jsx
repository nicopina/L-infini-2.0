import { Form, Card, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { getOrderItemsTopWorstN } from "../../../api/orderItems.api";
import React, { useEffect } from "react";



function TopNLeastSelled(params){

    const [number_2, setNumber_2] = React.useState(params.number_2);

    const [seed, setSeed] = React.useState(0);
    const [top, setTop] = React.useState([]);

    useEffect(() => {
        console.log("aa"+number_2);
        getOrderItemsTopWorstN(number_2).then((response) => {
            setTop(response.data);
        });
        // setSeed(Math.floor(Math.random() * 20));
    }, [number_2]);

    function handlerOnChange(event){
        console.log(event.target.value + " newValue");
        setNumber_2(event.target.value);
    }
 
    var cont = 1;
    return(
        
        <Card key = "top5worst">
  
            <CardBody key = "bodyWorst">
            <CardHeader>   
                <CardTitle>Top platos menos vendidos</CardTitle>
                <Form>
                    <label>Seleccione la cantidad de platos del Top &nbsp; </label>
                    <select onChange={handlerOnChange} name="n_worst" multiple={false} id="n_dishes_worst" defaultValue={number_2[0]}>

                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    
                </Form>
            </CardHeader>

            <ListGroup>
                {top?.map((item, index) => <ListGroupItem key = {"Worst"+index}> {cont++}.- {item.name} {item.quantity}</ListGroupItem>)}
            </ListGroup>

            </CardBody>     
        </Card>

    );

}

export default TopNLeastSelled;