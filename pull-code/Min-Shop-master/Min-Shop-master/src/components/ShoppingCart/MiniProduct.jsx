import React, { useRef } from 'react'
import ProductImg from './ProductImg'
import style from './MiniProduct.module.scss'
import ContentProduct from './ContentProduct'
export default function MiniProduct({imgSrc, name, price, priceDiscounted, }) {
  const widthProductImgRef = useRef();


  return (
    <div ref={widthProductImgRef} className={style.MiniProductContainer}>
      <div className={style.miniProductLeft}><ProductImg imgSrc={imgSrc}/></div>
      <div className={style.miniProductRight}><ContentProduct productName={name} price={price} priceDiscounted={priceDiscounted}/></div>

    </div>
  )
}
