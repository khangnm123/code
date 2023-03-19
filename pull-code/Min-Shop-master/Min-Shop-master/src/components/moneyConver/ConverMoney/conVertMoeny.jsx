import React, { useState } from 'react'
import {MoneyVert} from'../../../constant/data';
import './convert.css';
export default  function ConVertMoeny() {

    let [ moneyStart , setMoneyStart] = useState();
    let [moneyEnd , setMoneyEnd] =useState();
    let [ unit , setUnit] = useState(MoneyVert[0].nameMoney);
    console.log(unit);
    const currencyFormat =(num) => {
      return  num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' VNĐ';
  }
    let submidConVert = () =>{
      let indexMoney = MoneyVert.findIndex(item => item.nameMoney == unit) //tìm lựa chọn người dùng
      let money = Math.round((moneyStart * MoneyVert[indexMoney].numberMoney)); // làm tròn 
      setMoneyEnd(money);
    }
  return (
    <>
    <div className='container'>
    <div className="convert">
            <div className="convert__tittle">
                Đổi đơn vị tiền
            </div>
        </div>
        <div className='convert__content'>
                <p >Chọn nước để đổi tiền:</p> 
                <input value={moneyStart} onChange={e => setMoneyStart(e.target.value)} min ={0} type="number" placeholder='Convert Money....' />      
                 <select value={unit} onChange={e => setUnit(e.target.value)}> 
                    {MoneyVert.map((item , index) =>{
                      return(
                      <option key={index} value={item.nameMoney}>{item.nameMoney}</option>
                      )
                    })}
                 </select>
        </div>
        <div className='convert__vietnamese'>
          <p>Tiền Việt Nam:</p>
        <input type="text" value={moneyEnd &&  currencyFormat(moneyEnd)} placeholder="VietNamese Dong..." />
        
        </div>
        <button onClick={submidConVert} >Xác Nhận</button>
    </div>
        
    </>
  )
}


