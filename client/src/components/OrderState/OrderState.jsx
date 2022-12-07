import {getActiveOrderByTableIdRequest} from '../../api/orders.api';
import {useState, useEffect} from 'react';
import { Card } from 'reactstrap';
import Reload from '../Reload/Reload';
import "./OrderState.css";


function OrderState() {
  const [orders, setOrders] = useState([]);

  let total = 0;
  useEffect(() => {
    const table = localStorage.getItem('table');
    getActiveOrderByTableIdRequest(table).then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className='order-state__table'>
      <h1 style={{color:'black'}}>Estado de la Orden</h1>
      <Reload/>
      <div>
      </div>
      {orders.map((order,index) => (
        <Card key={index} className='order-state__card' >
          <p>Orden N°{order.id} | Mesa {order.table_id} | {order.state_name}</p>
          <div className='order-state__card2'>
            <h4 style={{color:"black"}}>Productos</h4>
          {order.orderList.map((item, index) => (
            total+=item.value*item.quantity,
            <div className='orderItem'>
              <img className='orderItemImage' src={item.photo_url}/>
              <div className='orderItem'>
              <p className='orderItemText'>{item.quantity} {item.name}</p>
              <p className='orderItemText'>${item.value*item.quantity}</p>
              </div>
            </div>
          ))}
          
          </div>
        </Card>
      ))}
      <p>Subtotal: ${total}</p>
    </div>
  );
}

export default OrderState