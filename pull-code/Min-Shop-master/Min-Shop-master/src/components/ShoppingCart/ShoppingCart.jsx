import React from "react";
import MiniProduct from "./MiniProduct";
import productImgTest from "../../assets/imgs/4xProduct.jpg";
import style from "./ShoppingCart.module.scss";

import CartButton from "./CartButton";
import clsx from "clsx";

/**
 * 
 * MiniProduct: Truyen noi dung cho card
 */
export default function ShoppingCart({
  isHaveCheckoutBtn = true,
  isHaveEditBtn = true,
}) {
  return (
    <div className={style.ShoppingCartContainer}>
      <div className={style.listProduct}>
        {/* Thông tin và số lượng sản phẩm trong giỏ hàng */}
        <MiniProduct
          imgSrc={productImgTest}
          name="Eye Mask Gel 60 g"
          price={26}
          priceDiscounted={21}
        />
        <MiniProduct
          imgSrc={productImgTest}
          name="Eye Mask Gel 65 g"
          price={30}
          priceDiscounted={25}
        />
      </div>

      {/* Tổng giá trị sản phẩm */}
      <div className={style.priceBox}>
        <div className={style.priceBoxLeft}>
          <h5>Total:</h5>
        </div>
        <div className={style.priceBoxRight}>
          <h5>$21</h5>
        </div>
      </div>

      <div className={style.controlShoppingCart}>
        {/* Cart Btn width depend it's parent */}
        {isHaveCheckoutBtn && (
          <div className={clsx(style.btnLeft, {
            [style.fullWidthBtn]: isHaveEditBtn === false,
          })}>
            <CartButton color="gray-accent" variant="primary">
              Checkout
            </CartButton>
          </div>
        )}
        {isHaveEditBtn && (
          <div
            className={clsx(style.btnRight, {
              [style.fullWidthBtn]: isHaveCheckoutBtn === false,
            })}
          >
            <CartButton color="text-dark" variant="white-accent">
              Edit Card
            </CartButton>
          </div>
        )}
      </div>
    </div>
  );
}
