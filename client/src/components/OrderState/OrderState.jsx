import {getActiveOrderByTableIdRequest} from '../../api/orders.api';
import {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import Reload from '../Reload/Reload';
import "./OrderState.css";


function OrderState() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const table = localStorage.getItem('table');
    getActiveOrderByTableIdRequest(table).then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className='order-state__table'>
      <h1>Estado de la Orden</h1>
      <Reload/>
      <div>
      </div>
      {orders.map((order,index) => (
        <Card key={index} className='order-state__card'>
          <p>Orden N°{order.id}</p>
          <p>Mesa {order.table_id}</p>
          <p>{order.state_name}</p>
        </Card>
      ))}
    </div>
  );
}

export default OrderState