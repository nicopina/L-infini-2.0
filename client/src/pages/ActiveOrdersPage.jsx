import { Card, CardContent, Grid } from "@mui/material";
import { Button } from "@mui/material";
import OrderActiveOrders from "../components/ActiveOrders/OrderActiveOrders";
// import { getActiveOrders } from "../api/orders.api";
import { useState } from "react";
import { getActiveOrderSummariesRequest } from "../api/orderSummaries.api";

function ActiveOrdersPage() {
  const [activeOrders, setActiveOrders] = useState([]);

  async function showActiveOrders() {
    setTimeout(() => {
      getActiveOrderSummariesRequest().then((response) => {
        setActiveOrders(response.data);
      });
  }
  , 3000);
  }

  showActiveOrders();

  return (
    <Grid
      container
      columns={12}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={12} sm={12} lg={12}>
        <h1>Pedidos activos</h1>
      </Grid>
      {activeOrders.map((order, index) => (
        <OrderActiveOrders order={order} key={index} />
      ))}
    </Grid>
  );
}

export default ActiveOrdersPage;
