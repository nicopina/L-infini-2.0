import { Checkbox, Grid } from "@mui/material";
import { useState } from "react";
// import { okOrderRequest } from "../../api/orders.api";
import { updateOrderItemRequest } from "../../api/orderItems.api";
import StateButton from "./StateButton";



function ItemActiveOrder(props) {
  const [checked, setChecked] = useState(!props.item.status);


  return (
    <Grid
      container
      backgroundColor="#85865B"
      margin="5px 10px"
      alignContent={"center"}
      justifyContent={"center"}
      puddding="10px"
      borderRadius="10px"
      fontFamily={"Roboto"}
    >
      <Grid
        item
        xs={12}
        md={3}
        lg={3}
        style={{
          backgroundColor: "#BEC081",
          margin: "10px",
          padding: "10px",
          color: "black",
          borderRadius: "10px",
        }}
      >
        <img src={props.item.photo_url} alt={props.item.name} width="100px" />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={3}
        style={{
          backgroundColor: "#BEC081",
          margin: "10px",
          padding: "1px",
          color: "black",
          borderRadius: "10px",
          textAlign : "center"
        }}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <p>{props.item.name}</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        lg={3}
        style={{
          backgroundColor: "#BEC081",
          margin: "10px",
          padding: "1px",
          color: "black",
          borderRadius: "10px",
        }}
      >
        <p>{props.item.quantity}</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={1}
        lg={1}
        style={{
          backgroundColor: "#85865B",
          margin: "10px",
          padding: "1px",
          color: "black",
          borderRadius: "10px",
        }}
      >
        {/* <Checkbox
          onClick={onCheckboxClick}
          checked={!!props.item.statuss}
        /> */}
        <StateButton item={props.item} checker={props.onCheckboxClicked}/>
      </Grid>
    </Grid>
  );
}

export default ItemActiveOrder;
