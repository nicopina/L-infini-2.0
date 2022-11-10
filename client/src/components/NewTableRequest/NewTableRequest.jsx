import React from "react";

import { createRequest } from "../../api/requests.api.js";

const tableId = localStorage.getItem("TableId");

const request = {
  "table_id": tableId,
  "status": 0,
  "type": 1,
};

function create(){
  console.log(request);
  createRequest(request);

}

function NewTableRequest() {

  return (

    <div className="boton">
      <button onClick={create} title = "LLama a un(a) meser@ a la mesa.">Necesito ayuda!!</button>
      
    </div>
  );
}

export default NewTableRequest;


