import React from "react";
import style from "./CartItem.module.scss";
import CartItemController from "./CartItemController";
import ProductImg from "./ProductImg";
import clsx from "clsx";

export default function CartItem({ img, title, size = "lg" }) {
    
    
  return (
    <div
      className={clsx(style.cartItemContainer, {
        [style.cartItemContainerSizeSm]: size === "sm",
      })}
    >
      <div className={style.productImgHead}>
        <div className={style.productImgContainer}>
          {/* chiều rộng của productImg theo productImgContainer */}
          <ProductImg imgSrc={img} sizeProduct={size==='sm' ? "1.5rem" : "2.5rem"} />
        </div>
      </div>
      <div className={style.ContentCardItem}>
        <h2 className={style.name}>{title}</h2>
        <div className={style.priceBox}>
          <h4 className={style.priceRoot}>$68</h4>
          <h3 className={style.priceDiscounted}>$56</h3>
        </div>
        <CartItemController quantity={2} size={size}/>
      </div>
    </div>
  );
}
