import React from "react";
import { useState, useEffect } from "react";
import { buttonClick, mandarMensaje } from "./notification";
import { getRequests } from "../../api/requests.api";

const Notifications = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getRequests().then((response) => {
        mandarMensaje(response.data);
        setRequests(response.data);
      });
    }, 10000);
  }, []);
};

export default Notifications;
