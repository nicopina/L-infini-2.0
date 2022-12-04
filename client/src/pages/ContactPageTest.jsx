import swal from "sweetalert";
import ContactForm from "../components/Mail/ContactForm";

function ContactPageTest() {
  const mostraralerta = () => {
    swal({
      title: "Gracias por contactarnos!",
      text: "Nos pondremos en contacto a la brevedad",
      icon: "success",
      button: "Aceptar",
    });
  };

  return (
    <div>
      <ContactForm />
      {/* <form >
            <button formAction='' onClick={()=>mostraralerta()}> Contactanos </button>
            </form> */}
    </div>
  );
}
export default ContactPageTest;
