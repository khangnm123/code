import React from "react";
import style from "./ContentProduct.module.scss"
import DeleteButton from "./DeleteButton";

export default function ContentProduct({
  productName,
  price,
  priceDiscounted,
}) {
  return (
    <div className={style.ContentProductContainer}>
      <div className={style.leftProductCotent}>
        <h4>{productName}</h4>
        <div className={style.priceBox}>
          <div className={style.price}>${price}</div>
          <div className={style.priceDiscounted}>${priceDiscounted}</div>
        </div>
      </div>
      <DeleteButton size="sm"/>
    </div>
  );
}
