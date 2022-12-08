import { useState, useEffect } from "react";
import { SendMessage } from "./notification";
import { getActiveOrdersRequest } from "../../api/orders.api";

const NotificationsChef = () => {
  const[lastRequests, setLastRequests] = useState(JSON.parse(localStorage.getItem("lastRequests")));
  var awaitTimeSec = 10;
  useEffect(() => {
    const interval = setInterval(() => {
      if(lastRequests < response.data.length){
        SendMessage();
        setLastRequests(response.data.length);
        localStorage.setItem("lastRequests", JSON.stringify(lastRequests));
      }
      getActiveOrdersRequest().then((response) => {
        if(lastRequests < response.data.length){
          SendMessage();
          setLastRequests(response.data.length);
          localStorage.setItem("lastRequests", JSON.stringify(lastRequests));
        }
      });
      
    },awaitTimeSec * 1000);
  }, []);
};

export default NotificationsChef;
