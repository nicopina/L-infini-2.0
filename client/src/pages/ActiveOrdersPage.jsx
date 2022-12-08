import { Card, CardContent, Grid } from "@mui/material";
import { Button } from "@mui/material";
import OrderActiveOrders from "../components/ActiveOrders/OrderActiveOrders";
import { useState } from "react";
import { getActiveOrdersRequest } from "../api/orders.api";
import { useEffect } from "react";
import Reload from "../components/Reload/Reload";

function ActiveOrdersPage() {
  const [activeOrders, setActiveOrders] = useState([]);

  useEffect(() => {
    getActiveOrdersRequest().then((response) => {
      setActiveOrders(response.data);
    });
    const interval = setInterval(() => {
      getActiveOrdersRequest().then((response) => {
        setActiveOrders(response.data);
      });
    }, 7000);
  }, []);

  return (
    <div
      style={{
        margin: "100px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

      }}
     >
      <Grid
        container
        columns={12}
        alignContent={"center"}
        justifyContent={"center"}
        >
        <Grid item xs={12} sm={12} lg={12} 
        style = {{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        >
          <h1 style={{color:'black',textAlign:'center',alignItems:'center', margin:'20px 0'}}>Pedidos activos</h1>
          <Reload/>
        </Grid>
        { activeOrders.length > 0 ? (
        activeOrders.map((order, index) => (
          <OrderActiveOrders order={order} key={index} />
        )) ) : (
          <Grid item xs={12} sm={12} lg={12}
          style = {{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          >
            <h2 style={{color:'black',textAlign:'center',alignItems:'center', margin:'20px 0'}}>No hay pedidos activos</h2>
          </Grid>
        )
      }
      </Grid>
    </div>
  );
}

export default ActiveOrdersPage;
