import React from "react";
import swal from "sweetalert";
import { createRequest } from "../../api/requests.api.js";
import "./NewTableRequest.css";

function NewTableRequest() {
  const request = {
    table_id: localStorage.getItem("table"),
    state: 0,
    type: 1,
  };

  function create() {
    createRequest(request);
  }
  function tuFuncionDefinida() {
    create();
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

  return (
    <div>
      <button
        class="button"
        onClick={tuFuncionDefinida}
        role="button"
        title="Pide la cuenta al mesero."
      >
        Solicitar Ayuda
      </button>
    </div>
  );
}

export default NewTableRequest;
