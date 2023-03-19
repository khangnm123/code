import React, { useEffect, useState } from "react";
import NumStep from "./NumStep";
import style from "./step.module.scss";
import clsx from "clsx";
/**
 * size = 'lg' || size = 'sm'
 * 
 */
export default function Step({ max, currentStep, size }) {
  max = Number(max);
  currentStep=Number(currentStep);

  const [numData, setNumData] = useState([]);


  useEffect(() => {
    let numDataResult = [];
    for (let i = 1; i <= max; i++) {
      let output = {
        nodeNum: i,
        isActive: false,
      };
      if (i<=currentStep) {
        output = {
          ...output,
          isActive: true,
        };
      }
      numDataResult.push(output);
    }
    setNumData(numDataResult);
  }, [max, currentStep, size]);

  return (
    <div className={style.stepContainer}>
      {numData.length > 0 &&
        numData.map((num, index) => {
          return (
            <>
              <NumStep num={num.nodeNum} active={num.isActive} size={size} key={num}/>
              {index < numData.length - 1 && <span className={clsx(style.line, {
                [style.lineActive]: num.isActive,
                [style.smLine] : size === {size}
              })}> </span>} 
            </>
          );
        })}
    </div>
  );
}
