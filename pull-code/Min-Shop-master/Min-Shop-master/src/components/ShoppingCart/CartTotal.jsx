import React from "react";
import style from "./CartTotal.module.scss";
import { Row, Col } from "antd";
import CartButton from "./CartButton";
export default function CartTotal({subTotalValue=0, taxValue = 0, shippingValue = 0, totalValue=0}) {
  return (
    <div className={style.cartTotalContainer}>
      <Row justify={"center"} className={style.title}>
        <Col>
          <h1>Cart Total</h1>
        </Col>
      </Row>
      <div className={style.totalBillContent}>
        <Row justify={"center"} className={style.subtotal}>
          <Col className={style.leftCol} xs={{ span: 4 }} sm={{ span: 10 }}>
            <h3>Subtotal:</h3>
          </Col>
          <Col className={style.rightCol} xs={{ span: 8, offset: 3 }} sm={{ span: 10, offset: 4 }}>
            <h3>${subTotalValue}</h3>
          </Col>
        </Row>
        <Row justify={"center"} className={style.tax}>
          <Col className={style.leftCol} xs={{ span: 4 }} sm={{ span: 10 }}>
            <h3>Tax:</h3>
          </Col>
          <Col className={style.rightCol} xs={{ span: 8, offset: 3 }} sm={{ span: 10, offset: 4 }}>
            <h3>${taxValue}</h3>
          </Col>
        </Row>
        
        <Row justify={"center"} className={style.shipping}>
          <Col className={style.leftCol} xs={{ span: 4 }} sm={{ span: 10 }}>
            <h3>Shipping:</h3>
          </Col>
          <Col className={style.rightCol} xs={{ span: 8, offset: 3 }} sm={{ span: 10, offset: 4 }}>
            <h3>${shippingValue}</h3>
          </Col>
        </Row>
        <Row justify={"center"} className={style.total}>
          <Col className={style.leftCol} xs={{ span: 4 }} sm={{ span: 10 }}>
            <h3>Total:</h3>
          </Col>
          <Col className={style.rightCol} xs={{ span: 8, offset: 3 }} sm={{ span: 10, offset: 4 }}>
            <h3>${totalValue}</h3>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col className={style.cartBtnContainer} xs={{ span: 16 }} sm={{span: 24}}>
            <CartButton variant={"primary"} color={"white-accent"}>
              Checkout
            </CartButton>
          </Col>
        </Row>
      </div>
    </div>
  );
}
