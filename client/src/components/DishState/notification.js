import addNotification from "react-push-notification";

export const buttonClick = () => {
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

export function repetirCadaXSegundos(t) {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000 * t);
}

export function mandarMensaje() {
  addNotification({
    title: "Aviso Urgente",
    subtitle: "Peligro inminente",
    message:
      'Cuidado, la infame asaltante sexual "Loreto Telgie" ha sido avistada en tu zona',
    theme: "darkblue",
    native: true, // when using native, your OS will handle theming.
  });
  console.log("notificado");
}
