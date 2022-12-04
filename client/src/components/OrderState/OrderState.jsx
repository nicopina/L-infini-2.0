import {getActiveOrderByTableIdRequest} from '../../api/orders.api';
import {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import Reload from '../Reload/Reload';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { ClassNames } from '@emotion/react';
import "./OrderState.css";

const style = makeStyles({
  tablematerial: {
    minWidth: 650,
  },
});
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

  // <h1>ID de la Orden: {order.id}</h1>
  //         <h1>Mesa: {order.table_id}</h1>
  //         <h1>Estado: {order.state_name}</h1>
  return (
    <div className='table' 
    style={{
      marginTop: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
    >
      <h3>Estado de la Orden</h3>
      <Reload/>
      <h3>Estado de la Orden</h3>
      {orders.map((order,index) => (
        <TableContainer key={index}
        style={{
          margin: '10px',
          maxWidth: '95%',
        }}
        >
          <Table stickyHeader aria-label="sticky table" className={ClassNames.tablematerial}>
            <TableHead>
              <TableRow>
                <TableCell fontSize='20' align="left">ID de la Orden</TableCell>
                <TableCell fontSize='20' align="center">Mesa</TableCell>
                <TableCell fontSize='20' align="center">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">{order.id}</TableCell>
                <TableCell align="center">{order.table_id}</TableCell>
                <TableCell align="center">{order.state_name}</TableCell>
              </TableRow>
            </TableBody>
            </Table>       
        </TableContainer>
      ))}
    </div>
  );
}

export default OrderState