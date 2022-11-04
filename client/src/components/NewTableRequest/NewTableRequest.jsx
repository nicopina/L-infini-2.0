import React from "react";
import { useContext } from "react";

import {BASE_URL} from "../../config.js";


const request = {
  "table_id": "M1",
  "status": 1,
  "type": 1,
  "created_at": "2021-08-01 00:00:00",
  "updated_at": "2021-08-01 00:00:00"
};


function create(){
  console.log(request);
  fetch(BASE_URL+"/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  }); 
  
}

function NewTableRequest() {


  return (


    <div className="boton">
      <button onClick={create}>Necesito ayuda!!</button>
      
    </div>
  );
}

export default NewTableRequest;


