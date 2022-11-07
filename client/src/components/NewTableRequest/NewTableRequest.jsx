import React from "react";

import { createRequest } from "../../api/requests.api.js";



const request = {
  "table_id": "M1",
  "status": 1,
  "type": 1,
};

function create(){
  console.log(request);
  createRequest(request);

}

function NewTableRequest() {

  return (

    <div className="boton">
      <button onClick={create}>Necesito ayuda!!</button>
      
    </div>
  );
}

export default NewTableRequest;


