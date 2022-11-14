import { Checkbox, Grid } from "@mui/material";
import { useState } from "react";
import { okOrderRequest } from "../../api/orders.api";

function ItemActiveOrder(props) {
  const [checked, setChecked] = useState(!props.item.statuss);

  const onCheckboxClick = () => {
    okOrderRequest(props.item.id)
    props.onCheckboxClicked();
  };

  return (
    <Grid
      container
      backgroundColor="#55711D"
      margin="5px 10px"
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Grid
        item
        xs={12}
        md={3}
        lg={3}
        style={{
          backgroundColor: "#596B34",
          margin: "10px",
          padding: "10px",
          color: "black",
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
          backgroundColor: "#C0C0C0",
          margin: "10px",
          padding: "1px",
          color: "black",
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
          backgroundColor: "#596B34",
          margin: "10px",
          padding: "1px",
          color: "black",
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
          backgroundColor: "#C0C0C0",
          margin: "10px",
          padding: "1px",
          color: "black",
        }}
      >
        <Checkbox
          onClick={onCheckboxClick}
          checked={!!props.item.statuss}
        />
      </Grid>
    </Grid>
  );
}

export default ItemActiveOrder;
