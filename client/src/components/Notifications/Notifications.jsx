import { useState, useEffect } from "react";
import { sendMessages } from "./notification";
import { getRequests } from "../../api/requests.api";

const Notifications = () => {
  var awaitTimeSec = 10;

  useEffect(() => {
    getRequests().then((response) => {
      sendMessages(response.data);
    });
    const interval = setInterval(() => {
      getRequests().then((response) => {
        sendMessages(response.data);
      });
    }, awaitTimeSec * 1000);
  }, []);
};

export default Notifications;
