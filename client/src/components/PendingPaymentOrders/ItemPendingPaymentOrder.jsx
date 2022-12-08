import React from "react";
import PaymentStateButton from "./PaymentStateButton";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

function ItemPendingPaymentOrder(params){


    return (
        <div>
        <Card >
            <CardHeader>
            <CardTitle tag="h5">Orden</CardTitle>
            <h1 style={{color:'black'}}>Orden</h1>
            </CardHeader>
            <CardBody>
            <p>id: {params.order.id}</p>
            <p>mesa: {params.order.id_table}</p>
            <p>estado: {params.order.state}</p>
            <p>total: {params.order.total}</p>
            <p>fecha: {params.order.created_at.substring(0,10) + " " + params.order.created_at.substring(11,19)}</p>
            <PaymentStateButton item={params.order}/>
            </CardBody>
        </Card>
        </div>

    )

}

export default ItemPendingPaymentOrder;