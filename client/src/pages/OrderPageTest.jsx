import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function OrderPageTest() {

  const orderList = [
    {
      id: 1,
      name: "Hamburguesa",
      price: 1000,
      quantity: 1,
      photo:
        "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
    },
    {
      id: 2,
      name: "Papas fritas",
      price: 500,
      quantity: 5,
      photo:
        "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
    },
    {
      id: 3,
      name: "Coca cola",
      price: 500,
      quantity: 3,
      photo:
        "https://jcc2020.cl/wp-content/uploads/2020/07/hector-soza-2-jcc2020-eic-ucn-33.jpg",
    },
  ];

  const total = orderList.reduce((a, b) => a + (b.price*b.quantity), 0);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={0}/>
            <TableCell colSpan={1}>Producto</TableCell>
            <TableCell align="right" colSpan={2}>Cantidad</TableCell>
            <TableCell align="right" colSpan={3}>Precio</TableCell>
            <TableCell align="right" colSpan={4}>Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((order, index) => (
            <TableRow key={index}>
              <TableCell colSpan={0}>
                <img src={order.photo} alt={"X"} height="30px" />
              </TableCell>
              <TableCell colSpan={1}>{order.name}</TableCell>
              <TableCell colSpan={2} align="right">{order.quantity}</TableCell>
              <TableCell colSpan={3} align="right">{order.price}</TableCell>
              <TableCell colSpan={4} align="right">{order.price * order.quantity}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={0}/>
            <TableCell colSpan={1}/>
            <TableCell colSpan={2}/>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell align="right" colSpan={4}>{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
