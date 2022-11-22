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

  function orderMade() {
    const order = {
      id: props.order.id,
      table_id : props.order.table_id,
      state: !props.order.state,
    };
    updateOrderRequest(order.id,order);
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
      className="orderActiveOrders"
      alignContent={"center"}
      justifyContent={"center"}
      backgroundColor="#98B85A"
      margin="5px 10px"
    >
      <Grid
        className="orderActiveOrders__value"
        item
        xs={12}
        sm={3}
        lg={3}
        style={{ backgroundColor: "#55711D", margin: "15px", padding: "1px" }}
      >
        <p>ID:{props.order.id}</p>
      </Grid>
      <Grid
        className="orderActiveOrders__value"
        item
        xs={12}
        sm={4}
        lg={5}
        style={{ backgroundColor: "#55711D", margin: "15px", padding: "1px" }}
      >
        <p>Mesa {props.order.table}</p>
      </Grid>
      <Grid
        className="orderActiveOrders__value"
        item
        xs={12}
        sm={3}
        lg={3}
        style={{ backgroundColor: "#55711D", margin: "15px", padding: "1px" }}
      >
        <p>{props.order.created_at}</p>
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
        backgroundColor="#55711D"
        margin="15px"
        alignContent={"center"}
        justifyContent={"center"}
      >
        {/* <Button
          onClick={orderMade}
          variant="contained"
          disabled={!checked}
        >
          OK
        </Button> */}
        <OrderDeliveredButton checked={checked} onClick={orderMade}/>
      </Grid>
    </Grid>
  );
}

export default OrderActiveOrders;
