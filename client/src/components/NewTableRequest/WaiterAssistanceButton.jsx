import React from "react";
import swal from "sweetalert";
import "./WaiterAssistanceButton.css";

function mostraralerta(){
  swal({
    title: "Asistencia confirmada",
    icon: "success",
    button: "Aceptar",
    });
}

function WaiterAssistanceButton() {
  return (
    <div>
      <button className="buttonGreen" onClick={mostraralerta}>Asistir</button>
    </div>
  );
}

export default WaiterAssistanceButton;
