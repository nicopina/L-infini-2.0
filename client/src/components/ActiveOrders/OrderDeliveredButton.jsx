import { useState } from "react";
import { Grid, Button } from "@mui/material";
import { useEffect } from "react";
import "./OrderActiveOrders.css";
function OrderDeliveredButton (props) {
    const [checked, setChecked] = useState(props.checked);

    useEffect (() => {
        setChecked(props.checked);
    }, [props.checked]);

    return (
        <Button
        onClick={props.orderMade}
        //variant="contained"
        disabled={!checked}
        className="button"
      >
        OK
      </Button>
    )
}

export default OrderDeliveredButton;