import React, { useEffect } from "react";
import { getPendingRequests } from "../../api/requests.api";
import NoAssistanceCard from "./NoAssistanceCard";
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
    const interval = setInterval(() => {
      funcion().then((response) => {
        setRequests(response);

      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);


  return (
    <h3>
      {
        requests.length === 0 ? (
          <NoAssistanceCard />
        ) : (
          requests.map((item) => (
            <div key={item.id}>{<TableRequest datos={item} />}</div>
          ))
        )        
      }
    </h3>
  );
}

export default TablesRequestsList;
