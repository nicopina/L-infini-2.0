import { useState, useEffect } from "react";
import { SendMessage } from "./notification";
import { getActiveOrdersRequest } from "../../api/orders.api";

const NotificationsChef = () => {
  var awaitTimeSec = 10;
  useEffect(() => {
    const interval = setInterval(() => {
      getActiveOrdersRequest().then((response) => {
        var lastRequests = JSON.parse(localStorage.getItem("lastRequests"));
        if(lastRequests < response.data.length){
          SendMessage();
          console.log(response.data.length);
          console.log(lastRequests);
          lastRequests = response.data.length;
          localStorage.setItem("lastRequests", JSON.stringify(lastRequests));
        }
      });
      
    },awaitTimeSec * 1000);
  }, []);
};

export default NotificationsChef;
