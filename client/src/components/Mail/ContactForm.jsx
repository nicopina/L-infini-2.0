import React, { useState } from "react";
import swal from "sweetalert";
import { FormControl } from "@mui/material";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import { Card } from "reactstrap";

const ContactForm = () => {
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
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1>Contacto</h1>
      <Card className="contact-card">
        <form className="contact-form" onSubmit={formData}>
          <label form="email">
            <span>Ingresa tu Email</span>
            <input
              type="text"
              name="email"
              placeholder="tucorreo@example.com"
            />
          </label>
          <label>
            <span>Ingresa tu nombre</span>
            <input type="text" name="name" placeholder="Nombre" />
          </label>
          <label>
            <span>Comentanos el motivo de tu contacto</span>
            <textarea type="text" name="message" placeholder="Mensaje" />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </Card>
    </div>
  );
};
export default ContactForm;
