import React, { useState } from "react";
import swal from "sweetalert";
import { FormControl } from "@mui/material";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import { Card } from "reactstrap";

const ContactForm = () => {
  const [message, setMessage] = useState("");

  const formData = (event) => {
    const { name } = event.target;
    event.preventDefault();

    emailjs
      .sendForm(
        "service_4qy0skm",
        "template_uzrduog",
        event.target,
        "Z5o-BzxsYjkBR5fHP"
      )
      .then(
        (result) => {
          swal({
            title: "Gracias por contactarnos " + name.value + "!",
            text: "Te enviaremos una respuesta en breve al correo que nos has proporcionado.",
            icon: "success",
            button: "Aceptar",
          })
          .then(() => {
              window.location.reload();
            })
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1 style={{color:'black'}}>Contacto</h1>
      <Card className="contact-card">
        <form className="contact-form" onSubmit={formData}>
          <label form="email">
            <span>Ingresa tu Email</span>
            <input
              type="text"
              name="email"
              placeholder="tucorreo@example.com"
              maxLength={50}
              required
            />
          </label>
          <label>
            <span>Ingresa tu nombre</span>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              maxLength={50}
            />
          </label>
          <label>
            <span>Comentanos el motivo de tu contacto</span>
            <textarea
              type="text"
              name="message"
              placeholder="Mensaje"
              required
              maxLength={400}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </Card>
    </div>
  );
};
export default ContactForm;
