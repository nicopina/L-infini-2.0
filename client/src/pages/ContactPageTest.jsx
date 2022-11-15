import swal from 'sweetalert';


function ContactPageTest () {
    const mostraralerta = () => {
    swal({
        title: "Gracias por contactarnos!",
        text: "Nos pondremos en contacto a la brevedad",
        icon: "success",
        button: "Aceptar",
        });
    }

    return (
        <div> 
            <br />
            <button onClick={()=>mostraralerta()}> Contactanos </button>
        </div>
    );
}
export default ContactPageTest;