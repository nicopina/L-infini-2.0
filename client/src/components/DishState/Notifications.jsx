import React from "react";
import { useState } from "react";
import addNotification from "react-push-notification";
import { buttonClick, repetirCadaXSegundos } from "./notification";

const Notifications = () => {
  useState(() => {
    repetirCadaXSegundos(5);
  }, []);

  return (
    <section>
      <button onClick={buttonClick} className="button">
        Notificar.
      </button>
      <button onClick={buttonClick} className="button">
        Desactivar notification.
      </button>
    </section>
  );
};

export default Notifications;
