import React, { useEffect } from "react";
import swal from "sweetalert";
import "./WaiterAssistanceButton.css";
import { updateRequest } from "../../api/requests.api";

const buttonAction = (message, props) => {
  updateRequest(props.data.id, { state: props.data.state + 1 }).then(
    (response) => {
      swal({
        title: message,
        icon: "success",
        button: "Aceptar",
      }).then(() => {
        window.location.reload();
      });
    }
  );
};

function WaiterAssistanceButton(props) {
  let state = props.data.state;
  let name, message;
  if (state == "0") {
    name = "Asistir";
    message = "Has decidido asistir a la mesa";
  }
  if (state == "1") {
    name = "Terminar asistencia";
    message = "Has terminado la asistencia de la mesa";
  }
  return (
    <div>
      <button
        className="buttonGreen"
        onClick={() => buttonAction(message, props)}
      >
        {name}
      </button>
    </div>
  );
}

export default WaiterAssistanceButton;
