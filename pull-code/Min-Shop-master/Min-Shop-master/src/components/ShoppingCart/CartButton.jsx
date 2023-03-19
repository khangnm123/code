import React from "react";
import { Button } from "antd";
import style from "./CartButton.module.scss";
export default function CartButton({ color, variant, children }) {

  const btnStyle = {
    backgroundColor: `var(--${variant})`,
    color: `var(--${color})`,
  };

  return (
    <Button className={style.btn} style={btnStyle} shape="round">
      {children}
    </Button>
  );
}
