import React from "react";
import { createRequest } from "../../api/requests.api.js";
import swal from "sweetalert";
import "./BillAssistanceButton.css";

function BillAssistanceButton() {
  const request = {
    table_id: localStorage.getItem("table"),
    state: 0,
    type: 0,
  };
  function tuFuncionDefinida() {
    createBill();
    ContactPageTest();
  }
  function ContactPageTest() {
    swal({
      title: "¿Estás segur@ de que quieres pedir la cuenta?",
      text: "Solo se enviará una solicitud por pedido.",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("!Muy pronto un mesero vendrá a ayudarte!", {
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      } else {
        swal("Tu cuenta no fue solicitada!", { icon: "error" });
      }
    });
  }
  function createBill() {

    createRequest(request);
  }
  return (
    <div>
      <button
        className="button"
        onClick={tuFuncionDefinida}
        role="button"
        title="Pide la cuenta al mesero."
      >
        Pedir la cuenta
      </button>
    </div>
  );
}

export default BillAssistanceButton;
