import React, { useEffect, useState } from "react";
import style from "./DeleteButton.module.scss";
import deleteIcon from "./Icons/deleteIcon.svg";
export default function DeleteButton({size = 'lg'}) {
  
  const [btnSize, setBtnSize] = useState('4rem');
  useEffect(() => {
    size === 'sm' ? setBtnSize('3rem'): setBtnSize('4rem')
  },[size])

  const btnDeleteStyle = {
    width: btnSize,
    height: btnSize
  }

  return (
    <div style={btnDeleteStyle} className={style.btnDelete}>
      <div className={style.deleteImgContainer}>
        <img src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
}
