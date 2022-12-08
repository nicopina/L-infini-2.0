import React from 'react';

import {getOrdersPendingPayment} from '../api/orders.api';
import PendingPaymentOrdersList from '../components/PendingPaymentOrders/PendingPaymentOrdersList';
//Este componente es el que se encarga de mostrar los pedidos pendientes de pago, es decir, todas las orders que tienen state = 2
//Usa el mismo estilo que ActiveOrders, pero con un componente diferente

function OrdersPendingPaymentPage(){

    const [PendingOrders, setPendingOrders] = React.useState([]);

    React.useEffect(() => {
        getOrdersPendingPayment().then((response) => {
            setPendingOrders(response.data);
        });
    }, []);


    return (
        <div>
            <h1>OrdersPendingPaymentPage</h1>
            <PendingPaymentOrdersList PendingOrders={PendingOrders}/>
        </div>
    )
}

export default OrdersPendingPaymentPage;