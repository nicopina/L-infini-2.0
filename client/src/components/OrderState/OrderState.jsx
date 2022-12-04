import {getActiveOrderByTableIdRequest} from '../../api/orders.api';
import {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import Reload from '../Reload/Reload';

function OrderState() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const table = localStorage.getItem('table');
    getActiveOrderByTableIdRequest(table).then((response) => {
      // response.data.map((order) => {
      //   order.state? order.color = 'yellow' : order.color = 'green';
      // })
      setOrders(response.data);
    });
  }, []);


  return (
    <div>
      <Reload/>
      {orders.map((order,index) => (
        <Card  key={index} style={{backgroundColor: order.state? 'yellow' : 'green', margin:'5px', padding:'15px'}}>
          <h1>ID de la Orden: {order.id}</h1>
          <h1>Mesa: {order.table_id}</h1>
          <h1>Estado: {order.state_name}</h1>
        </Card>
      ))}
    </div>
  );
}

export default OrderState