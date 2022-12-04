import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getTableRequest } from "../api/tables.api";
import { UserContext } from "../Context/UserContext";

function NoTable() {
  const { id } = useParams();
  const [user, setUser, table, setTable] = useContext(UserContext);

  useEffect(() => {
    if (id !== undefined) {
      getTableRequest(id).then((res) => {
        if (res.data) {
          setTable(id);
        }
      });
    }
  }, [id]);

  return (
    <div>
      <p>Escanee un codigo qr para poder pedir</p>
    </div>
  );
}

export default NoTable;
