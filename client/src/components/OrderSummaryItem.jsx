import "./OrderSummaryItem.css";

function OrderSummaryItem(props) {
  return (
    <div style={{ margin: "5px" }}>
      <img src={props.item.photo} alt={"X"} height="30px" />
      <span style={{ margin: "5px" , position: "initial"}}>{props.item.name}</span>
      <span style={{ margin: "5px", position: "initial"}}>{props.item.quantity}</span>
      <span style={{ margin: "5px", position: "initial"}}>${props.item.price}</span>
      
    </div>
  );
}

export default OrderSummaryItem;

