import React from "react";
import { useEffect } from "react";
import addNotification from "react-push-notification";

const MenuPackTest = () => {
  const buttonClick = () => {
    addNotification({
      title: "Aviso Urgente",
      subtitle: "Peligro inminente",
      message:
        'Cuidado, la infame asaltante sexual "Loreto Telgie" ha sido avistada en tu zona',
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
    });
  };

  let identificadorIntervaloDeTiempo;

  function repetirCadaSegundo() {
    identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 10000);
  }

  function mandarMensaje() {
    addNotification({
      title: "Aviso Urgente",
      subtitle: "Peligro inminente",
      message:
        'Cuidado, la infame asaltante sexual "Loreto Telgie" ha sido avistada en tu zona',
      theme: "darkblue",
      native: true, // when using native, your OS will handle theming.
    });
    console.log("notificado")
  }

  useEffect(() => {
    repetirCadaSegundo();
  }, []);

  return (
    <section>
      <button onClick={buttonClick} className="button">
        Hello world.
      </button>
    </section>
  );
};

export default MenuPackTest;
