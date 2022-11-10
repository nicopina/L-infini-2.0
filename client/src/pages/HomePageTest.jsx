import {useParams} from 'react-router-dom';
import React from "react";



function HomePageTest() {

    const {tableId} = useParams();
    localStorage.setItem("TableId", tableId);
  return (
    <div>
      <h1>Home</h1>
      {window.location.href = "/menu"}
    </div>
  );
}

export default HomePageTest;
