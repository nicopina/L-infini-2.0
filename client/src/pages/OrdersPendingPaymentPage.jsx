import React from 'react';
import './OrdersPendingPaymentsPage.css'
import {getOrdersPendingPayment} from '../api/orders.api';
import PendingPaymentOrdersList from '../components/PendingPaymentOrders/PendingPaymentOrdersList';

function OrdersPendingPaymentPage(){

    const [PendingOrders, setPendingOrders] = React.useState([]);

    React.useEffect(() => {
        getOrdersPendingPayment().then((response) => {
            setPendingOrders(response.data);
        });
    }, []);


    return (
        <div className='ordenadito'>
            <h1 style={{color:'black'}}>Lista de ordenes pendientes </h1>
            <PendingPaymentOrdersList PendingOrders={PendingOrders}/>
        </div>
    )
}

export default OrdersPendingPaymentPage;