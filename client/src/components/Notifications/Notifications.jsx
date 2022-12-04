import { useState, useEffect } from "react";
import { sendMessages } from "./notification";
import { getRequests } from "../../api/requests.api";

const Notifications = () => {
  const [requests, setRequests] = useState([]);

  var awaitTimeSec = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      getRequests().then((response) => {
        sendMessages(response.data);
        setRequests(response.data);
      });
    }, awaitTimeSec * 1000);
  }, []);
};

export default Notifications;