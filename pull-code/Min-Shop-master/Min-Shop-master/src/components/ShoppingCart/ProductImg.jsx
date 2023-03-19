import React, { useRef } from 'react'

import style from './ProductImg.module.scss'
export default function ProductImg({imgSrc, sizeProduct='1.5rem' }) {
  const widthContainerRef = useRef();
  
  const imgStyleContainer = {
    width: sizeProduct,
  }
  
  return (
    <div ref={widthContainerRef} className={style.productImgContainer}>
      <div style={imgStyleContainer} className={style.productImgDetail}>
        <img src={imgSrc} alt="productImg" />
      </div>
    </div>
  )
}
