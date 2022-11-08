import { Grid, Button } from "@mui/material";
import ItemActiveOrder from "./ItemActiveOrder";
import { useState } from "react";
import "./OrderActiveOrders.css";

function OrderActiveOrders(props) {
  const [checked, setChecked] = useState(false);

  function checkboxCheck() {
    setChecked(true);
    props.order.orderList.forEach((item) => {
      if (!item.statuss) {
        setChecked(false);
      }
    });
    setChecked(allChecked);
  }

  // checkboxCheck();

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
      backgroundColor ="#98B85A"
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
        <p>Mesa {props.order.table_id}</p>
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
          onCheckboxClicked={checkboxCheck}
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
        <Button onClick={() => console.log('ok')} variant="contained" disabled={!checked}>
          OK
        </Button>
      </Grid>
    </Grid>
  );
}

export default OrderActiveOrders;
