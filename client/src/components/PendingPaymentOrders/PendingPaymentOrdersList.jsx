import React from "react";
import ItemPendingPaymentOrder from "./ItemPendingPaymentOrder";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

function PendingPaymentOrdersList(params){

    if (params.PendingOrders.length === 0){
        return (
            <div>
                <Card >
                    <h3>No hay ordenes pendientes de pago</h3>
                </Card>
            </div>
        )
    }
    return (
        <div>
            <ul>
                {params.PendingOrders.map((order) => {
                    return <ItemPendingPaymentOrder order={order}/>
                })}
            </ul>


        </div>
    )
}

export default PendingPaymentOrdersList;