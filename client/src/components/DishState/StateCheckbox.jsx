import { Checkbox } from "@mui/material";
import React from "react";
import { updateDishRequest } from "../../api/dishes.api";

const StateCheckbox = (props) => {
  function changeState(id, state) {
    console.log({ is_active: state });
    updateDishRequest(id, { is_active: state });
  }
  var state = props.state;
  if (props.state) {
    state = true;
  } else {
    state = false;
  }
  return (
    <div>
      <Checkbox
        checked={state}
        color="success"
        onChange={()=>changeState(props.id, !props.state)}
      ></Checkbox>
    </div>
  );
};

export default StateCheckbox;
