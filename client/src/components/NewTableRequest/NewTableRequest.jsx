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
      title: "¿Estás segur@ de solicitar asistencia?",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("!Tu solicitud Ha sido recibida con exito!", {
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      } else {
        swal("Tu solicitud no fue enviada!", { icon: "error" });
      }
    });
  }

  return (
    <div>
      <button
        className="button"
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
