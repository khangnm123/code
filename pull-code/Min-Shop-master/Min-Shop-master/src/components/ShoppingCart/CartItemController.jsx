import React, { useEffect, useState } from 'react'
import style from "./CartItemController.module.scss"
import DeleteButton from './DeleteButton'
import leftArrow from "./Icons/leftArrow.svg"
import rightArrow from "./Icons/rightArrow.svg"
export default function CartItemController({quantity, size}) {

  const [arrowSize, setArrowSize] = useState({padding: '1.3rem'});
  
  useEffect(() => {
    size === 'sm' ? setArrowSize({padding: '0.8rem'}) : setArrowSize({padding: '1.3rem'});
  },[size])
  return (
    <div className={style.controller}>
      <div className={style.productQuantity}>
        <button style={arrowSize} className={style.leftArrow}>
            <img src={leftArrow} alt="decrease" />
        </button>

        <div className={style.quantityNumber}><h3 style={size === 'sm' ? {fontSize: '20px'} : {}}>{quantity}</h3></div>

        <button style={arrowSize} className={style.rightArrow}>
            <img src={rightArrow} alt="increase" />
        </button>
      </div>
      <DeleteButton size={size}/>
    </div>
  )
}
