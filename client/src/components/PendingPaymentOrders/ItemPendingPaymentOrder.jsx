import React from "react";
import PaymentStateButton from "./PaymentStateButton";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import "./ItemPendingPaymentOrder.css";
function ItemPendingPaymentOrder(params){


    return (
        <div>
        <Card className="cardPetit">
            <CardHeader>
            <CardTitle style={{}} tag="h3">ORDEN MESA {params.order.id_table}</CardTitle>
            </CardHeader>
            <CardBody style={{textAlign:"center"}}>
            <p>ID: {params.order.id}</p>
            <p>Estado: {params.order.state}</p>
            <p>Total: {params.order.total}</p>
            <p>Fecha: {params.order.created_at.substring(0,10) + " " + params.order.created_at.substring(11,19)}</p>
            <PaymentStateButton item={params.order}/>
            </CardBody>
        </Card>
        </div>

    )

}

export default ItemPendingPaymentOrder;