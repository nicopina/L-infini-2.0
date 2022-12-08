import { useState } from "react";
import { Grid} from "@mui/material";
import { useEffect } from "react";
import "./OrderActiveOrders.css";
import { Button } from 'reactstrap';
function OrderDeliveredButton (props) {
    const [checked, setChecked] = useState(props.checked);

    useEffect (() => {
        setChecked(props.checked);
    }, [props.checked]);

    return (
      <div>
        <Button color="success"
        onClick={props.orderMade}
        disabled={!checked}
      >
        OK
      </Button>
      </div>
    )
}

export default OrderDeliveredButton;