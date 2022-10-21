//import "./FlipCard.css";
import ProductCard from "./ProductCard";

import { Container, Row, Col } from "reactstrap";
import { fastFoodProducts } from "../../api/products";
import { useState } from "react";
import CSSTransition from "react-transition-group";

function FlipCard() {
    const[showfront, setShowFront]=useState(true);
  return (
    <section>
      <Container>
        <Row>
          {fastFoodProducts.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {""}
              <CSSTransition in={showfront} timeout={300} className='Flip'>
              <ProductCard item={item} onClick={()=>{
                setShowFront((v)=>!v);}}/>
              </CSSTransition>
              {" "}
            </Col>
          ))}

        </Row>

       
      </Container>
    </section>
  );
}

export default FlipCard;
