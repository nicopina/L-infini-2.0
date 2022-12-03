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

export function repetirCadaXSegundos(array) {
  mandarMensaje(array);
}

export function mandarMensaje(array) {
  var message;
  array.map((element) => {
    if(element.type == 0){
      message = 'La mesa '+element.id+' solicita que le entreguen la cuenta.';
    }if(element.type == 1){
      message = 'La mesa '+element.id+' requiere asistencia.';
    }
    if (element.state == 0) {
      addNotification({
        title: "L'infini",
        subtitle: "Asistencia",
        message:
          message,
        theme: "darkblue",
        native: true, // when using native, your OS will handle theming.
      });
    }
  });
  console.log("notificado");
}
