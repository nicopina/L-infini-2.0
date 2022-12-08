import {updateOrderItemRequest} from "../../api/orderItems.api";
import {useState} from "react";
import { useEffect } from "react";
import "./OrderActiveOrders.css";
import { Button } from "reactstrap";
function StateButton (props) {
    const [state, setState] = useState(props.item.state);
    const [color, setColor] = useState('red');
    const [text, setText] = useState('Pendiente');

    //case 0: "Ordenado"
    //case 1: "En preparación"
    //case 2: "Listo"

    const onButtonClick = () => {
        if (state === 0) {
            updateOrderItemRequest(props.item.id,{'state':1}).then((response) => {
                setState(1);
            });
        }
        else if (state === 1) {
            updateOrderItemRequest(props.item.id,{'state':2}).then((response) => {
                setState(2);
            });
        }
        else if (state === 2) {
            updateOrderItemRequest(props.item.id,{'state':0}).then((response) => {
                setState(0);
            });
        }
    };
    
    useEffect  (() => {
        props.item.state = state;
        props.checker();
        if (state == 0) {
            setColor("red");
            setText("Pendiente");
        } else if (state == 1) {
            setColor("yellow");
            setText("Preparando");
        } else if (state == 2) {
            setColor("green");
            setText("Listo");
        }

    }, [state]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            borderRadius: "10px"
        }}>
            <Button onClick={(e) => {onButtonClick(e)}} style={{'backgroundColor':color,color:'black',borderRadius: "10px"}}>{text}</Button>
        </div>
    );
}

export default StateButton;