import addNotification from "react-push-notification";

export const SendMessage = () => {
  addNotification({
    title: "L'infini",
    subtitle: "Pedido nuevo",
    message:
      'Hay pedidos nuevos',
    theme: "darkblue",
    native: true, // when using native, your OS will handle theming.
  });
};

export function sendMessages(array) {
  var message;
  array.map((element) => {
    if(element.type == 0){
      message = 'La mesa '+element.table_id+' solicita que le entreguen la cuenta.';
    }if(element.type == 1){
      message = 'La mesa '+element.table_id+' requiere asistencia.';
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
      console.log("notificado");
    }
  });
}
