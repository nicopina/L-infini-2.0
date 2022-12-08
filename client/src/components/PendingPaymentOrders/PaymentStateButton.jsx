import React from "react";

import {updateOrderRequest} from "../../api/orders.api";

function PaymentStateButton(params){

    const [state, setState] = React.useState(params.item.state);
    const [color , setColor] = React.useState("");
    const [text, setText] = React.useState("");

    if (state === 2){

        const [color , setColor] = React.useState("red");
        const [text, setText] = React.useState("Pago Pendiente");
    }else if(state === 3){

        const [color , setColor] = React.useState("green");
        const [text, setText] = React.useState("Pago Listo");
    }

    //Case 2: Pago Pendiente
    //Case 3: Pago Listo
    //Hacer un switch para cambiar el color y el texto del boton al hacer click

    React.useEffect(() => {
        switch (state) {
            case 2:
                setColor("red");
                setText("Pago Pendiente");
                break;
            case 3:
                setColor("green");
                setText("Pago Listo");
                break;
            default:
                break;
        }
    }, [state]);

    function handlePaymentState(){
        //Cambiar los estaddos de la orden
        //Si el estado es 2, cambiarlo a 3
        //Si el estado es 3, cambiarlo a 2

        if(state === 2){
            setState(3);
            updateOrderRequest(params.item.id, {state: 3});
        }else if(state === 3){
            setState(2);
            updateOrderRequest(params.item.id, {state: 2});
        }
    }

    return (
        <div>
            <button style={{backgroundColor: color}} onClick={handlePaymentState}>{text}</button>
        </div>
    )
}

export default PaymentStateButton;