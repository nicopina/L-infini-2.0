import React from "react";
import { createRequest } from "../../api/requests.api.js";

const request = {
  table_id: "M1",
  status: 0,
  type: 0,
};

function createBill() {
  console.log(request);
  createRequest(request);
}

function BillAssistanceButton() {
  return (
    <div className="boton">
      <button onClick={createBill} title= "Pide la cuenta al mesero.">Pedir la cuenta $$$</button>
    </div>
  );
}

export default BillAssistanceButton;
