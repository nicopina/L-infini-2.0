import { Grid, Button } from "@mui/material";
import ItemActiveOrder from "./ItemActiveOrder";
import { useState } from "react";
import "./OrderActiveOrders.css";
import { useEffect } from "react";
import { getIfAllItemsAreOkRequest , updateOrderRequest } from "../../api/orders.api";
import OrderDeliveredButton from "./OrderDeliveredButton";

function OrderActiveOrders(props) {
  const [checked, setChecked] = useState();
  const [seed, setSeed] = useState(0);

  async function buttonActive() {
    await getIfAllItemsAreOkRequest(props.order.id).then((response) => {
      if (response.data.length == props.order.orderList.length){
        setChecked(true);
      }
      else  {
        setChecked(false);
      }
    });
  }

  //Formatear fecha
  //props.order.created_at = props.order.created_at.substring(0,10) + " " + props.order.created_at.substring(11,19);
  //

  function orderMade() {
    const order = {
      id: props.order.id,
      table_id : props.order.table_id,
      state: !props.order.state,
    };
    updateOrderRequest(order.id,order);
    window.location.reload();
    setSeed(seed + 1);
  }


  useEffect (() => {
    setSeed(seed + 1);
  }, [checked]);

  if (props.order.orderList.length === 0) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <p>No hay productos en la orden</p>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      className = 'center'
      alignContent={"center"}
      justifyContent={"center"}
      backgroundColor="#000000"
      margin="5px 10px"
      borderRadius="10px"
      textAlign={"center"}
    >
      <Grid
        className = 'center'
        item
        xs={12}
        sm={3}
        lg={3}
        style={{ backgroundColor: "#E2E1E1", margin: "15px", padding: "1px", borderRadius: "10px" }}
      >
        <p>ID:{props.order.id}</p>
      </Grid>
      <Grid
        className = 'center'
        item
        xs={12}
        sm={4}
        lg={5}
        style={{ backgroundColor: "#E2E1E1", margin: "15px", padding: "1px", borderRadius: "10px" }}
      >
        <p>Mesa {props.order.table_id}</p>
      </Grid>
      <Grid
        className = 'center'
        item
        xs={12}
        sm={3}
        lg={3}
        style={{ backgroundColor: "#E2E1E1", margin: "15px", padding: "1px" , borderRadius: "10px"}}
      >
        <p>{props.order.created_at.substring(0,10) + " " + props.order.created_at.substring(11,19)}</p>
      </Grid>
      {props.order.orderList.map((item, index) => (
        <ItemActiveOrder
          item={item}
          key={index}
          onCheckboxClicked={buttonActive}
        />
      ))}
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        backgroundColor="#000000"
        margin="10px"
        borderRadius={"10px"}
        alignContent={"center"}
        justifyContent={"center"}
        className = 'center'
        >
        <OrderDeliveredButton checked={checked} orderMade={orderMade}/>
      </Grid>
    </Grid>
  );
}

export default OrderActiveOrders;
