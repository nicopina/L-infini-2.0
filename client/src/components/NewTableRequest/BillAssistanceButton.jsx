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
      title: "Estas segura de que quieres pedir la cuenta?",
      text: "una vez que lo hagas no podras volver a pedir la cuenta",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("!Tu cuenta Ha sido solicitada con exito!", {
          icon: "success",
        });
      } else {
        swal("Tu cuenta no fue solicitada!", { icon: "error" });
      }
    });
  }
  function createBill() {
    console.log(request);
    createRequest(request);
  }
  return (
    <div>
      <button
        class="button"
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
