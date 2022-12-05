import React, { useEffect } from "react";
import { getPendingRequests } from "../../api/requests.api";
import TableRequest from "./TableRequest";

var funcion = async function getTablesRequests() {
  const response = await getPendingRequests();
  return response.data;
};

function TablesRequestsList() {
  const [requests, setRequests] = React.useState([]);

  useEffect(() => {
    funcion().then((response) => {
      setRequests(response);
    });
  }, []);

  return (
    <h3>
      {requests?.map((item) =>
        item.status != 2 ? (
          <div key={item.id}>{<TableRequest datos={item} />}</div>
        ) : null
      )}
    </h3>
  );
}

export default TablesRequestsList;
