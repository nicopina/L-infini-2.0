import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function NoTableView() {
  const { id } = useParams();
  const [user, setUser, table, setTable] = useContext(UserContext);

  useEffect(() => {
    if (id !== undefined) {
        console.log(id)
      setTable(id);
    }
  }, []);

  return (
    <div>
      <p>Escanee un codigo qr para poder pedir</p>
    </div>
  );
}

export default NoTableView;
